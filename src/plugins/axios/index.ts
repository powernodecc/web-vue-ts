import Axios from "@/plugins/axios/Axios";

const http = new Axios({
    baseURL: 'http://localhost:88/api'
})

export default http