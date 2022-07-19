import {AliasOptions} from "vite";
import * as path from "path";

const alias: AliasOptions = {
    '@': path.resolve(__dirname, '../src'),
    '~': path.resolve(__dirname, '../types')
}

export default alias