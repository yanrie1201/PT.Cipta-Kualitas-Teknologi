import axios from 'axios'
import { DataContact } from '../types/type'

const contact = async (data: DataContact) => {
  const request = await axios.post(
    `https://6283-118-99-107-221.ngrok.io/api/send-mail`,
    data
  )
  return request.data
}

export default { contact }
