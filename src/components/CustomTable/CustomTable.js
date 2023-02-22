import React from 'react'
import PropTypes from 'prop-types'

// Components
import FilterInputs from '../FilterInputs'
import PaginationTable from '../PaginationTable'

// Styles
import useStyles from './useStyles'

const CustomTable = ({ title, rows, filters, tableHeaders, onRowClick, onChangeRows, onChangeFilter }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.headerSection}>
        {!!title.length && <span className={classes.tableTitle}>{title}</span>}
        {!!filters.length && <FilterInputs filters={filters} onChange={onChangeFilter} />}
      </div>
      <PaginationTable rows={rows} tableHeaders={tableHeaders} onChangeRows={onChangeRows} onRowClick={onRowClick} />
    </div>
  )
}

CustomTable.propTypes = {
  title: PropTypes.string,
  rows: PropTypes.array,
  filters: PropTypes.array,
  tableHeaders: PropTypes.array,
  onRowClick: PropTypes.func,
  onChangeRows: PropTypes.func,
  onChangeFilter: PropTypes.func,
}

CustomTable.defaultProps = {
  title: '',
  rows: [],
  filters: [],
  tableHeaders: [],
  onRowClick: () => {},
  onChangeRows: () => {},
  onChangeFilter: () => {},
}

export default CustomTable
