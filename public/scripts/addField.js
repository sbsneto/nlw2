//Procurar o botão
document.querySelector("#add-time").addEventListener('click', cloneField)
//Quando clicar no botão

//Executar uma ação
function cloneField() {
  //Duplicar os campos: que campos?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
  //Pegar os campos: que campos?
  const fields = newFieldContainer.querySelectorAll('input')
  //Para cada campo, limpar
  fields.forEach(function(field){
      field.value = ""
  })
  //Colocar na página: onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
