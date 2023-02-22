import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

// Helpers
import moment from 'moment'

// Services
import { getCurrentUserData, getFilteredUsers, getUsersPerPage } from '../../services/userService'

// Styles
import useStyles from './useStyles'

// Context
import { UserContext } from '../../context/userContext'

const useUsers = () => {
  const [users, setUsers] = useState([])
  const [openUserInfo, setOpenUserInfo] = useState(false)
  const [selectedUser, setSelectedUser] = useState({})

  const { rowsPerPage } = useContext(UserContext)

  const params = useParams()
  const classes = useStyles()

  const getUsers = useCallback(async ({ page, rowsPerPage }) => {
    const users = await getUsersPerPage({ rowsPerPage, page })
    setUsers(users)
  }, [])

  const onChangeFilter = useCallback(
    async (filters) => {
      let users = []
      const filterString = filters.map(({ key, value }) => `${key}=${value}`).join('&')
      if (filterString.length) {
        users = await getFilteredUsers({ filterString, rowsPerPage })
      } else {
        users = await getUsersPerPage({ rowsPerPage, page: 0 })
      }
      setUsers(users)
    },
    [rowsPerPage]
  )

  const onSelectUser = useCallback((user) => {
    setSelectedUser(user)
    setOpenUserInfo(true)
  }, [])

  const toggleDrawer = useCallback((open) => {
    setOpenUserInfo(open)
  }, [])

  useEffect(() => {
    getUsers({ page: 0 })
  }, [getUsers])

  const twoRowsCell = useCallback(
    (first, second, iconPath) => (
      <div className={classes.formattedCellContainer}>
        {iconPath && <img className={classes.userIcon} src={iconPath} alt='user icon' />}
        <div className={classes.textCell}>
          <span className={classes.boldText}>{first}</span>
          <span className={classes.regularText}>{second}</span>
        </div>
      </div>
    ),
    [classes]
  )

  const formatUserData = useCallback(
    ({
      email,
      phone,
      picture: { thumbnail, large },
      registered: { date },
      name: { first, last },
      location: { country, postcode, street, state, city },
    }) => {
      const userName = [first, last].join(' ')
      const registrationHour = moment(date).format('h:mm A')
      const registrationDate = moment(date).format('MMM DD, YYYY')
      const address = [street.number, street.name, city, state].join(', ')
      const data = {
        email,
        phone,
        address,
        postcode,
        userName,
        thumbnail: large,
        registrationDate,
        registrationHour,
      }
      const cell = {
        name: twoRowsCell(userName, address, thumbnail),
        location: twoRowsCell(country, postcode),
        contactInformation: twoRowsCell(email, phone),
        registrationDate: twoRowsCell(registrationDate, registrationHour),
      }
      return {
        data,
        cell,
      }
    },
    [twoRowsCell]
  )

  const fetchUserData = useCallback(async () => {
    const user = await getCurrentUserData()
    const formatedUserData = formatUserData(user)
    setSelectedUser(formatedUserData.data)
    setOpenUserInfo(true)
  }, [formatUserData])

  useEffect(() => {
    if (params.id) {
      fetchUserData()
    }
  }, [fetchUserData, params])

  const dataToDisplay = useMemo(() => users.map((user) => formatUserData(user)), [formatUserData, users])

  return {
    users,
    openUserInfo,
    selectedUser,
    dataToDisplay,
    onChangeFilter,
    onSelectUser,
    toggleDrawer,
    getUsers,
  }
}

export default useUsers
