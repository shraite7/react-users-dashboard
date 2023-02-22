import React from 'react'
import PropTypes from 'prop-types'

// Helpers
import useFilterInputs from './useFilterInputs'

// Styles
import useStyles from './useStyles'

const FilterInputs = ({ filters = [], onChange = () => {} }) => {
  const classes = useStyles()
  const { onChangeInput } = useFilterInputs({ filters, onChange })
  return (
    <div className={classes.filterSection}>
      {filters.map(({ key = '', value = '' }) => (
        <input key={key} placeholder={value} onChange={(e) => onChangeInput({ value: e.target.value, key })} />
      ))}
    </div>
  )
}

FilterInputs.propTypes = {
  filters: PropTypes.array,
  onChange: PropTypes.func,
}

FilterInputs.defaultProps = {
  filter: [],
  onChange: () => {},
}

export default FilterInputs
