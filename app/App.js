import { Title } from "./components/Title.js"

export function App() {
    console.log(Title())
    const $main = document.getElementById("root")
   


    $main.innerHTML = null
    $main.insertAdjacentElement("afterbegin",Title())
    
}