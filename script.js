let screen=document.getElementById("screen")

function btnClick(value){
screen.value +=value
}

function clearScreen(){
    screen.value=""
}
function findResult(){
    let result=eval(screen.value)
    screen.value=result
}
function findSquare(){
   
    let value =parseFloat(screen.value)

    if(!isNaN(value)){
        screen.value=value*value
        }
}

function findSquare2(){
   
    let value =parseFloat(screen.value)

    if(!isNaN(value)){
        screen.value=value*value*value
        }
}
 

function backSpace(){
    const input=screen
    const start=input.selectionStart
    const end=input.selectionEnd

    if(start>0){
        input.value=input.value.slice(0,start-1)+input.value.slice(end)
        input.setSelectionRange(start-1,start-1)

    }
      input.focus()
}