const form = document.getElementById("form-habits") // pegando o formulario pelo ID//
const nlwSetup = new NLWSetup(form) //iniciar a biblioteca //
const button = document.querySelector("header button.add")
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

const data =JSON.parse(localStorage.getItem('salvarDados')) || {}
nlwSetup.setData(data)
nlwSetup.load()



