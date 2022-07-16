import Axios from "@/plugins/axios/Axios";

const http = new Axios({
    baseURL : '/api'
})

export default http