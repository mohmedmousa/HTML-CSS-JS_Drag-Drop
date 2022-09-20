let input =document.getElementById("input")
let button =document.getElementById("button")
let boxs=document.querySelectorAll(".box")
let drag=null
window.onl=input.focus()
button.onclick=function(){
    
    if(input.value!=""){
        boxs[0].innerHTML+=`
        <p class="element" draggable="true">${input.value}</p>
        `
        input.value=""
        
    }
    dragElement()
    input.focus()
}

function dragElement(){
    let elements=document.querySelectorAll(".element")
    elements.forEach(function(ele){
        ele.addEventListener("dragstart",function(){
            drag=ele
            ele.style.opacity=".5"
        })
        ele.addEventListener("dragend",function(){
            drag=null
            ele.style.opacity="1"
        })
        ele.onclick=function(){
            ele.remove()
        }
        boxs.forEach(box => {
            box.addEventListener("dragover",function(e){
                e.preventDefault()
                box.style.background="green"
                box.style.color="white"
            })

            box.addEventListener("dragleave",function(){
                box.style.background="white"
                box.style.color="black"
            })
            box.addEventListener("drop",function(){
                box.append(drag)
                box.style.background="white"
                box.style.color="black"
            })
        });
    })
}

