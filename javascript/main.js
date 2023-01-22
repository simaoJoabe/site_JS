const buscaProduto = (seletor)=>{

const result = document.querySelector(seletor)
result.innerHTML =  `<img src="./image/download.jpeg" />`


}
const mostraEspec = (seletor)=>{
    const especificacoes = document.querySelector(seletor)
    especificacoes.innerHTML = "celular motorola 8GB ram, 12megaPix,128GB espaço interno"

}