let btnNumber = document.querySelectorAll(".number");
let display = document.querySelector(".display");
function showdisplay(event){
    const x = event.target.innerText;
    if(display.innerText == 0){
       return display.innerText = x;
    }
    return display.innerText += x;
};
btnNumber.forEach(items=>{
    items.addEventListener("click",showdisplay)
})
function calculate(){
    let result = display.innerText;
    display.innerText = eval(result);
};
function allClear(){
    display.innerText = 0;
};
function Clear(){
    let text = display.innerText;
    if(text.length === 1){
        display.innerText = 0;
    }else{
        display.innerText = text.substring(0,text.length -1)
    }
}
document.querySelector(".Equal").addEventListener("click",calculate);
document.querySelector(".clearAll").addEventListener("click",allClear);
document.querySelector(".clear").addEventListener("click",Clear);