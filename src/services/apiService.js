export default class ApiService {

    __baseUrl = "https://data.jsdelivr.com/v1"
    

    getData = async(url, name) => {
        const data = await fetch(`${this.__baseUrl}${url}${name}`) 

        if(!data.ok) {
            throw new Error(`Error: ${data.status}`)
        } else {
            return data.json()
        }
    }

}