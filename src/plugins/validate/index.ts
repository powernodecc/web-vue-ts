import rules from '@vee-validate/rules'
import * as validate from 'vee-validate'
import {localize} from '@vee-validate/i18n'
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
import yup from "@/plugins/validate/yup"

validate.configure({
    generateMessage: localize('zh_CN', zh_CN),
    // validateOnInput: true,
})

Object.keys(rules).forEach(key => {
    validate.defineRule(key, rules[key])
})

export default {yup, ...validate}