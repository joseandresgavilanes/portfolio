


const cajaHamburguesa = document.querySelector(".ul")
    
const car = document.querySelector(".hamburguesa")

function openAndCloseCart() {

    car.addEventListener("click", ()=>{
        cajaHamburguesa.classList.toggle("show_sidebar_carton")
    })
}
openAndCloseCart()



