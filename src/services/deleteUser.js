const API = 'https://jsonplaceholder.typicode.com/'

export const deleteUser = async (userID) => {
  const apiURl = `${API}users/${userID}`
  console.log({ apiURl })
  try {
    await fetch(apiURl, { method: 'DELETE' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
      .catch((err) => console.log('Fetch Error', err))
    // const data = await response.json()
    // return data
  } catch (error) {
    console.log('Fetch Error', error)
  }
}
