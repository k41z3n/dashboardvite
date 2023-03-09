import { createApp } from 'vue'


import { registerPlugins } from "@/plugins"
import { layoutsTemplates } from "@/layouts";

import "@fortawesome/fontawesome-free/css/all.css";
import 'animate.css';
import './style.css'

import App from './App.vue'

const app = createApp(App);

registerPlugins(app);
layoutsTemplates(app);

app.mount("#app");