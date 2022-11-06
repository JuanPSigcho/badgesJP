const API = 'https://jsonplaceholder.typicode.com/'
const faker = require('faker')

export const getUsers = async () => {
  const apiURl = `${API}users`
  try {
    const response = await fetch(apiURl)
    const data = await response.json()
    return data.map((userData) => {
      return {
        id: userData.id,
        firstName: userData.name,
        email: userData.email,
        jobTitle: faker.name.jobTitle(),
        twitter: `${userData.username}`,
        avatarUrl: 'https://api.lorem.space/image/face?w=250&h=320',
      }
    })
  } catch (error) {
    console.log('Fetch Error', error)
  }
}

export const getSpecificUser = async (userID) => {
  const apiURl = `${API}users/${userID}`
  console.log(faker.address.countryCode())

  try {
    const response = await fetch(apiURl)
    const userData = await response.json()

    return {
      id: userData.id,
      firstName: userData.name,
      email: userData.email,
      jobTitle: faker.name.jobTitle(),
      twitter: `${userData.username}`,
      countryCode: faker.address.countryCode(),
      avatarUrl: 'https://api.lorem.space/image/face?w=100&h=170',
    }
  } catch (error) {
    console.log('Fetch Error', error)
  }
}
