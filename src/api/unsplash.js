import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID i7k9WzLceg_6XrwNzoFejnCa5acx4-0swvN-00s1n18'
    }
})