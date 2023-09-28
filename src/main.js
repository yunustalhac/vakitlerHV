import {createApp} from 'vue'
import "@/assets/assets.css"
import App from './App.vue'
import { appAxios } from "@/utils/appAxios";




const app = createApp(App)
app.provide("appAxios", appAxios);
app.mount('#app')
