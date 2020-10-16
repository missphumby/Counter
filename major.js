let carrier = document.getElementById("carrier");
let count = 0;
function incrementCount(){
   carrier.innerHTML = count+=1;
}

function decrementCount(){
   carrier.innerHTML = count-=1;
}

document.querySelector(".nextBtn").addEventListener("click", incrementCount)

document.querySelector(".prevBtn").addEventListener("click", decrementCount)
    
   






//
//const counter = document.getElementById("counter");
//const button = document.getElementsByTagName("button");
//const buttons = document.getElementsByClassName("counterBtn");
// 
//
//(function(){buttons.forEach(function(button){
//for(let count = 0; count. <= 100; count++) 
//    
//button.onClick = function(){
//    event.preventDefault()
//    if(button.classList.contains("prevBtn")){
//        count--}
////  else if(button.classList.contains(`nextBtn`))
//    else if(button.classList.contains("nextBtn")){
//        count++}                        
//}
//                            
//})
//           });
//                 
//const buttons = document.getElementsByClassName("Btn-container");
//  var count = 0;
//    
////const button = Document.getElementsByTagName("button");
//const counter = document.querySelector('#counter');
//
//
//
//function countNumbers()
//    //Add event listeners and functionailty to each button  
//{buttons.forEach(function(button){
//    button.addEventListener('click', function(){
//      if (button.classList.contains('prevBtn')){
//    counter.textContent = count--;
//      } else if (button.classList.contains('nextBtn')){
//        counter.textContent = count++;
//      }
//    })
//    })};