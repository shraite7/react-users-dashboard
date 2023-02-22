export const getUsersPerPage = async ({ rowsPerPage = 8, page = 0 }) => {
  try {
    return await fetch(`https://randomuser.me/api?results=${rowsPerPage}&page=${page}`)
      .then((response) => {
        return response.json()
      })
      .then(({ results }) => {
        return results
      })
  } catch (error) {
    console.log('Failed to fetch users per pagedata')
  }
}

export const getCurrentUserData = async () => {
  try {
    return await fetch('https://randomuser.me/api')
      .then((response) => {
        return response.json()
      })
      .then(({ results }) => {
        // as it returns an array of one element (random user)
        return results[0]
      })
  } catch (error) {
    console.log('Failed to fetch users data')
  }
}

export const getFilteredUsers = async ({ filterString, rowsPerPage = 8 }) => {
  try {
    return await fetch(`https://randomuser.me/api/?results=${rowsPerPage}&${filterString}`)
      .then((response) => {
        return response.json()
      })
      .then(({ results }) => {
        return results
      })
  } catch (error) {
    console.log('Failed to fetch filtered users data')
  }
}
