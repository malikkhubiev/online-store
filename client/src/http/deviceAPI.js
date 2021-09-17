import { $host } from "."

export const fetchOneDevice = async(id) => {
    const { data } = await $host.get('/api/device/' + id)
    return data
}