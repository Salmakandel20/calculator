// const btns =document.querySelectorAll("button")
const numbers=document.querySelectorAll(".num")
const display=document.querySelector(".dis")
const operands=document.querySelectorAll(".operand")
let x=0;
numbers.forEach((number)=>{
     number.addEventListener("click",()=>{
        if(x===1){
            display.innerHTML=""
            x=0
        }
        if(display.innerHTML==='0')
        { display.innerHTML=""}
       
      display.innerHTML+=parseInt(number.innerHTML)
     })
   
})
operands.forEach((operand)=>{
operand.addEventListener("click",()=>{
    if(operand.innerHTML==="="){
        display.innerHTML=eval(display.innerHTML)
        x=1
       }
       else if(operand.innerHTML==="C"||operand.innerHTML==="Off")
       {display.innerHTML=""}
       else if(operand.innerHTML==="On")
       {display.innerHTML=0
    }
    else if(operand.innerHTML==="remove")
       {
        let x=display.innerHTML[display.innerHTML.length-1]
        display.innerHTML=display.innerHTML.replace(x,"")
          
       }
 
       else{
         display.innerHTML+=operand.innerHTML
       }

   
  
})

})