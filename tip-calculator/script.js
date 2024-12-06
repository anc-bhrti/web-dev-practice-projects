const billAmt=document.querySelector("#bill");
const tipPer=document.querySelector("#tip-per");
// earlier we were using querySelector('tip-per') but it was selecting the div tip-per not the input element init

const btn=document.querySelector(".calculate-btn");
    btn.addEventListener("click",function(){
        //tipPer was only the DOm object and not the value so we neede to define the value too
        //the value by default is string so from any input source in js so we converted to number using parseFloat
        const bill=parseFloat(billAmt.value);
        const tip=parseFloat(tipPer.value);
        //total is already the numerical value so we do not use parseFloat on it
        const total=(1+tip/100)*bill;
        const totalEl=document.querySelector(".total");
        totalEl.innerHTML=`Total: ${total.toFixed(2)}`;
})
