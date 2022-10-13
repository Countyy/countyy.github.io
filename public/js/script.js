const glass = document.getElementById("glass")
const destaque = document.getElementById("destaque")

glass.addEventListener("mouseover", () => {
    destaque.style.backgroundSize = "95%"
    destaque.style.transition = "all .3s ease"
})

glass.addEventListener("mouseout", () => {
    destaque.style.backgroundSize = "90%"
})