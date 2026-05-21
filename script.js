
console.log("SAFEBOG AI cargado correctamente");

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");

    if(window.scrollY > 50){
        nav.style.background = "rgba(5,8,22,0.8)";
    }else{
        nav.style.background = "transparent";
    }
});
