import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk"

const config = defineConfig({
    projectId: '1zuzahkv',
    dataset: 'production',
    apiVersion: '2023-03-04',
    basePath : '/admin',
    plugins: [deskTool()]
})

export default config