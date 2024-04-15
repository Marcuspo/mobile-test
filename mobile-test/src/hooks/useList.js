import { useQuery } from "react-query"
import axios from "axios"

const fetchList = async () => {
  const { data } = await axios.get(
    `https://dev.api.syncremote.com/api/v1/admin/users`
  )
  return data
}

const useList = () => useQuery("users", fetchList)

export default useList
