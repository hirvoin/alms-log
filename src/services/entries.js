import axios from 'axios'

const baseUrl = 'https://infinite-mesa-21324.herokuapp.com/api/entries'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createEntry = async (entryObject) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, entryObject, config)
  return response.data
}

export default {
  getAll,
  createEntry,
  setToken,
}
