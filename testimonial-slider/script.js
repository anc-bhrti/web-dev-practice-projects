/*
learnt about querySelector, querySelectorsAll
if u are using fnction declaration then u can se function before declaring it (BECAUSE THESE ARE HOISTED)
if u use arrow function or function expressions then u cannt use it before declaring it
in this code if we used arrow function or function declaration then it would have caused error, because then we could not run the updateTestimonial function just after declaring 'idx'

** function expressions :
const func = function () {
    ...............
};
*/

const goodReviews = [
    {
        goodName:'John',
        goodReview:'John, you can safely call updateTestimonial before its declaration because its a function declaration.This behavior is due to hoisting, a feature of JavaScript that lifts function declarations to the top of their scope.'
    },
    {
        goodName:'Jessica',
        goodReview:'Jessica, you can safely call updateTestimonial before its declaration because its a function declaration.This behavior is due to hoisting, a feature of JavaScript that lifts function declarations to the top of their scope.'
    },
    {
        goodName:'Jenny',
        goodReview:'Jenny, you can safely call updateTestimonial before its declaration because its a function declaration.This behavior is due to hoisting, a feature of JavaScript that lifts function declarations to the top of their scope.'
    },
    {
        goodName:'Jia',
        goodReview:'Jia, you can safely call updateTestimonial before its declaration because its a function declaration.This behavior is due to hoisting, a feature of JavaScript that lifts function declarations to the top of their scope.'
    },
    {
        goodName:'Jannet',
        goodReview:'Jannet,you can safely call updateTestimonial before its declaration because its a function declaration.This behavior is due to hoisting, a feature of JavaScript that lifts function declarations to the top of their scope.'
    } 
]
const naam= document.querySelector(".name");
const rev=document.querySelector(".review");

//use let and not const because value of id is changing
let id=0;

//updateReviews called just after id declaration so that the first review slides just with opening, and the rest of the reviews slide in after the first one
//it was possible to call it before declaring because of hoisting
//hoisting when function declaration using function not when arrow function or function expression
//hoising puts the function top of its scope
updateReviews();

//the below line is destructuring: it is equivalent to writing - 
//const goodName = goodReviews[id].goodName; const goodReview = goodReviews[id].good


function updateReviews(){
const {goodName, goodReview}=goodReviews[id];
naam.innerHTML=goodName;
rev.innerHTML=goodReview;

id++;

// we use === to check value and type
if(id===goodReviews.length){
    id=0;
} 

// no parenthesis after setTimeout because we need to pass it by reference
//function passing by reference - we want the setTimeout to know where the function is and not immediatelt execute it
//function is invoked - executed immediately; here causes error
// if still we need to pass it by reference but invoke also then we can do something like this :
//setTimeout(()=>updateReviews(),10000);
//for example if there was a greet function then : 
//setTimeout(()=>greet('Anchal'),1000);

setTimeout(updateReviews,10000);

}