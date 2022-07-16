import axios, {AxiosRequestConfig} from "axios";

export default class Axios {
    private instance

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)
        this.interceptor()
    }

    public async request<T, E = R<T>>(config: AxiosRequestConfig) {
        return new Promise<E>(async (resolve, reject) => {
            try {
                const response = await this.instance.request<E>(config)
                resolve(response.data)
            } catch (e) {
                reject(e)
            }
        })
    }

    private interceptor() {
        this.interceptorRequest()
        this.interceptorResponse()
    }

    private interceptorRequest() {
        this.instance.interceptors.request.use((config) => {
            return config
        }, error => {
            return Promise.reject(error)
        })
    }

    private interceptorResponse() {
        this.instance.interceptors.response.use(response => {
            return response
        }, error => {
            return Promise.reject(error)
        })
    }
}