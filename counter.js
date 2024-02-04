let counter=0;

const Current=document.getElementById("value");
const increment=document.getElementById("incr-btn");
const decrement=document.getElementById("dec-btn");
const reset=document.getElementById("rst-btn");

increment.addEventListener("click",()=>
{
    counter++;
    Current.innerHTML=counter;
});

decrement.addEventListener("click",()=>
{
    counter--;
    Current.innerHTML=counter;
});

reset.addEventListener(
"click", ()=>
{
   counter=0;
   Current.innerHTML=counter;

});