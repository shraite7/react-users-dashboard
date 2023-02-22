import React from 'react'

// Components
import UserInfo from './partials/UserInfo'
import PageHeader from '../../components/PageHeader'
import CustomTable from '../../components/CustomTable'

// Helpers
import useUsers from './useUsers'

// Constants
import { USERS_TABLE_HEADERS, FILTERS } from './constants'

const Users = () => {
  const { dataToDisplay, selectedUser, openUserInfo, onChangeFilter, onSelectUser, toggleDrawer, getUsers } = useUsers()
  return (
    <>
      <PageHeader title='Users' />
      <CustomTable
        title='All Users'
        filters={FILTERS}
        rows={dataToDisplay}
        tableHeaders={USERS_TABLE_HEADERS}
        onChangeRows={getUsers}
        onRowClick={onSelectUser}
        onChangeFilter={onChangeFilter}
      />
      <UserInfo isOpen={openUserInfo} userData={selectedUser} toggleDrawer={toggleDrawer} />
    </>
  )
}

Users.propTypes = {}

Users.defaultProps = {}

export default Users
