import http from "@/plugins/axios";

export type LoginVerifyData = {
    username: string
    password: string
}

export type LoginToken = {
    token: string
}

class UseAuthApi {
    login = async (data: LoginVerifyData) => {
        return await http.request<LoginToken>({
            url: 'getOne',
            method: 'post'
        })
    }
}

const userApi = new UseAuthApi()

export default userApi