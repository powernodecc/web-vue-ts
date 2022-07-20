import http from "@/plugins/axios";

export interface VerificationLoginId {
    loginId: string
}

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

    getVerificationCode = async (data: VerificationLoginId) => {
        return await http.request<string>({
            url: 'getVerificationCode',
            method: 'post',
            data
        })
    }

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