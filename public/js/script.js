const glass = document.getElementById("glass")
const destaque = document.getElementById("destaque")

glass.addEventListener("mouseover", () => {
    destaque.style.backgroundSize = "95%"
    console.log("Funcionou")
})