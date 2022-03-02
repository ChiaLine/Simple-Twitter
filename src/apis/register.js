import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  register({ account, name, email, password, checkPassword }) {
    return apiHelper.post(`/users`, {
      account,
      name,
      email,
      password,
      checkPassword
    }, { headers: { Authorization: `Bearer ${getToken()}` } })
  },
}
