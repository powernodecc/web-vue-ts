import http from "@/plugins/axios";

export interface RegisterProfile {
    username: string
    loginId: string
    password: string
    verifyCode: string
}

export interface LoginVerifyData {
    loginId: string
    password: string
}

export type LoginOK = {
    token: string
    username: string
    avatar: string
}

class UseAuthApi {

    register = async (data: RegisterProfile) => {
        return await http.request<string>({
            url: 'register',
            method: 'post',
            data
        })
    }
    login = async (data: LoginVerifyData) => {
        return await http.request<LoginOK>({
            url: 'login',
            method: 'post',
            data
        })
    }
}

const useAuthApi = new UseAuthApi()

export default useAuthApi