import {ElMessage} from "element-plus";

const tips = (message: string, type: any) => {
     ElMessage({
        message,
        type
    })
}

export default tips
