import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-drop-and-pick.firebaseio.com/'
})

export default instance