import { useContext, useMemo } from 'react'

// Context
import { UserContext } from '../../context'

const usePageHeader = () => {
  const { userData } = useContext(UserContext)
  const { name: { first, last } = {}, picture: { thumbnail } = {} } = userData

  const userName = useMemo(() => [first, last].join(' '), [first, last])

  return {
    userName,
    userIcon: thumbnail,
  }
}

export default usePageHeader
