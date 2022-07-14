import * as lodash from "lodash"

const viteEnv = lodash.cloneDeep(import.meta.env)

Object.entries(import.meta.env).forEach(([key, value]) => {
    if (value === 'true' || value === 'false') {
        viteEnv[key] = value === 'true'
    } else if (/^\d+$/.test(value)) {
        viteEnv[key] = Number(value)
    } else if (value === undefined) {
        viteEnv[key] = undefined
    }
})

export default viteEnv