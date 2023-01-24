const form = document.getElementById("form-habits") 
const nlwSetup = new NLWSetup(form) 
const button = document.querySelector("header button.add")
const btnFundo1 = document.getElementById("btnFundo1") 
const btnFundo2 = document.getElementById("btnFundo2") 
const body = document.getElementById("body") 
const header = document.getElementById("header") 



button.addEventListener("click",add)
form.addEventListener("change",save)
function add(){
const today = new Date().toLocaleDateString('pt-br').slice(0, -5)

const dayExists = nlwSetup.dayExists(today)

if (dayExists){
alert("Dia ja incluso ")
return
}
alert ("Dia adicioado com sucesso☑️")

nlwSetup.addDay(today)
}
function save(){
localStorage.setItem("salvarDados",JSON.stringify(nlwSetup.data))
}

function alterarFundo1(){ 
body.style.backgroundColor = '#09090A';
header.style.backgroundColor = '#09090A';
return 
}
function alterarFundo2(){ 
body.style.backgroundColor = 'gray';
header.style.backgroundColor = 'gray';
return 
}

const data =JSON.parse(localStorage.getItem('salvarDados')) || {}
nlwSetup.setData(data)
nlwSetup.load()


btnFundo1.addEventListener("click", alterarFundo1)
btnFundo2.addEventListener("click",alterarFundo2)


