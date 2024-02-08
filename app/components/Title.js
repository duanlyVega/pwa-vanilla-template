export function Title() {
   const $title = document.createElement("h1");
   $title.textContent = "Titulo"
   const css = `.title{display:flex}`
   $title.style.display = `${css}`
   $title.classList.add("title");

   return $title
    
}