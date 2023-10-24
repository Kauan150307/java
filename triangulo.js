const fore  = document.querySelectorI("fore")
const resp = document.querySelector("#outResp")
const resp1 = document.querySelector("#outResp1")

//ouvinte
form.addEventListener("submit", (e)=>(
    e.preventDefaultO()

    const ladoA = Number(form.inLadoA.value)
    const ladoB = Number(form.inladoB.value)
    const ladoC = Number(form.inladoC.value)
<
    if((ladoA > ladoB + ladoC) || (ladoB > ladoA + ladoC) || (ladoC > ladoA + ladoB)){
    alert("Essas medidas não podem formar um  tri")
    }
))

