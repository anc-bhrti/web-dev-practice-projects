const date=document.querySelector("#date");
const dispAge=document.querySelector(".dispAge");
const calcAgeBtn = document.querySelector(".calcAge-btn");
calcAgeBtn.addEventListener("click", function(){
    const birthdate=new Date(date.value); //new Date to declare the data type because date.value is a string
    const today = new Date; //this is the way we get todays date
    const age = today.getFullYear() - birthdate.getFullYear();
    const month=today.getMonth()-birthdate.getMonth();
    //logic :-
    if(month<0 || (month==0 && today.getDate()<birthdate.getDate())){
        age--;
    }
    dispAge.innerHTML=`Age : ${age}`;


})
