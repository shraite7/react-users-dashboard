import React from 'react'
import PropTypes from 'prop-types'

// Components
import {
  Paper,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableFooter,
  TableContainer,
  TablePagination,
} from '@mui/material'

// Styles
import useStyles from './useStyles'

// Helpers
import usePaginationTable from './usePaginationTable'

const PaginationTable = ({ rows = [], tableHeaders = [], onRowClick = () => {}, onChangeRows = () => {} }) => {
  const classes = useStyles()
  const { page, rowsPerPage, emptyRows, handleChangePage, handleChangeRowsPerPage } = usePaginationTable({
    rows,
    onChangeRows,
  })

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table aria-label='custom pagination table' className={classes.paginationTable}>
        <TableHead>
          <TableRow className={classes.headerRow}>
            {tableHeaders.map(({ key, value }) => (
              <TableCell key={key}>{value}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ cell, data }, index) => (
            <TableRow key={index} className={classes.dataRow} onClick={() => onRowClick(data)}>
              {Object.entries(cell).map(([key, value]) => (
                <TableCell key={`${key}_${index}`}>{value}</TableCell>
              ))}
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter className={classes.tableFooterContainer}>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 8, 10, 12, 15, 20]}
              colSpan={4}
              count={(page + 1) * rows.length + 1}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              className={classes.tableFooter}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

PaginationTable.propTypes = {
  rows: PropTypes.array,
  tableHeaders: PropTypes.array,
  onRowClick: PropTypes.func,
  onChangeRows: PropTypes.func,
}

PaginationTable.defaultProps = {
  rows: [],
  tableHeaders: [],
  onRowClick: () => {},
  onChangeRows: () => {},
}

export default PaginationTable
