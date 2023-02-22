import { useCallback, useMemo, useRef } from 'react'

// Utils
import { debounce } from '../../utils'

const useFilterInputs = ({ onChange = () => {} }) => {
  const inputsValues = useRef(null)

  const onChangeInput = useCallback(
    ({ key, value }) => {
      inputsValues.current = { ...inputsValues.current, [key]: value }
      const filledFilters = Object.entries(inputsValues.current)
        .filter(([_, value]) => !!value.length)
        .map(([key, value]) => ({ key, value }))
      onChange(filledFilters)
    },
    [onChange]
  )

  const deboncedOnChangeFilter = useMemo(() => debounce(onChangeInput), [onChangeInput])

  return {
    onChangeInput: deboncedOnChangeFilter,
  }
}

export default useFilterInputs
