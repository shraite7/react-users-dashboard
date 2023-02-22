import { useCallback, useContext, useMemo, useState } from 'react'

// Context
import { UserContext } from '../../context/userContext'

const usePaginationTable = ({ rows, onChangeRows }) => {
  const [page, setPage] = useState(0)

  const { rowsPerPage, setRowsPerPage } = useContext(UserContext)
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = useMemo(
    () => (page > 0 ? Math.max(0, rowsPerPage - rows.length) : 0),
    [page, rows.length, rowsPerPage]
  )

  const handleChangePage = useCallback(
    (_event, newPage) => {
      setPage(newPage)
      onChangeRows({ rowsPerPage, page: newPage })
    },
    [onChangeRows, rowsPerPage]
  )

  const handleChangeRowsPerPage = useCallback(
    (event) => {
      const newRowsPerPage = parseInt(event.target.value, 10)
      setRowsPerPage(newRowsPerPage)
      onChangeRows({ rowsPerPage: newRowsPerPage, page: 0 })
      setPage(0)
    },
    [onChangeRows, setRowsPerPage]
  )

  return { page, rowsPerPage, emptyRows, handleChangePage, handleChangeRowsPerPage }
}

export default usePaginationTable
