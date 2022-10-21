const glass = document.getElementById("glass")
const destaque = document.getElementById("destaque")

glass.addEventListener("mouseover", () => {
    destaque.style.backgroundSize = "95%"
    destaque.style.transition = "all .3s ease"
})

glass.addEventListener("mouseout", () => {
    destaque.style.backgroundSize = "90%"
})

const candidato1Foto = document.getElementById("candidato1Foto")
const candidato1Info = document.getElementById("candidato1Info")

candidato1Foto.addEventListener("mouseover", () => {
    candidato1Info.style.transition = ".4s ease all"
    candidato1Info.style.transform = "translateY(-350px)"
})

candidato1Info.addEventListener("mouseleave", () => {
    candidato1Info.style.transform = "translateY(0)"
})

candidato2Foto.addEventListener("mouseover", () => {
    candidato2Info.style.transition = ".4s ease all"
    candidato2Info.style.transform = "translateY(-350px)"
})
candidato2Info.addEventListener("mouseleave", () => {
    candidato2Info.style.transform = "translateY(0)"
})