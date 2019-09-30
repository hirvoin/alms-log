import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/entries'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createEntry = async (entryObject) => {
  const response = await axios.post(baseUrl, entryObject)
  return response.data
}

export default {
  getAll,
  createEntry,
}
