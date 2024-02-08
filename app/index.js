import { App } from "./App.js";
import { serviceWorker } from "./helpers/serviceWorker.js";

serviceWorker()


document.addEventListener("DOMContentLoaded",App)
window.addEventListener("hashchange",()=>{
    App()
})
