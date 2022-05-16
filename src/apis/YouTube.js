import axios from "axios"

const KEY = 'AIzaSyDV1qfdeevW35N1xjC1ysRkFAChzoB_XJ4'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})