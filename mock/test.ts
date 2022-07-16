import {MockMethod} from "vite-plugin-mock";

export default [
    {
        url: "/api/getOne",
        method: "post",
        response: () => {
            return {
                code: 200,
                message: "请求成功",
                type: 'OK',
                data: 'cxccc'
            };
        }
    }
] as MockMethod[]