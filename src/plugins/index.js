import router from "../router";
import pinia from "../store";

export function registerPlugins(app) {
    app.use(router).use(pinia);
}
