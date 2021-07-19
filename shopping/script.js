
const hearts=document.querySelectorAll('.heart');
var plus=document.querySelectorAll(".plus");
var moin=document.querySelectorAll(".moin");
var quantity=document.querySelectorAll(".entré");
var price=document.querySelectorAll(".price") ;
var total=document.querySelectorAll(".total")
somme();

//  fonction like 

for ( let heart of  hearts) {
 heart.addEventListener("click", function(){
    this.classList.toggle("color");
});    
}
// fonction trash 

function deletear1(){    
     var parentElem = document.querySelector('.items');  
        var childElem = document.querySelector('.dele1');  
           parentElem.removeChild(childElem); 
somme();
}

function deletear2(){    
    var parentElem = document.querySelector('.items');  
       var childElem = document.querySelector('.dele2');  
          parentElem.removeChild(childElem); 
   somme();
     
}

function deletear3(){    
    var parentElem = document.querySelector('.items');  
       var childElem = document.querySelector('.dele3');  
          parentElem.removeChild(childElem); 
   somme();
         
}


// fonction plus 
for( let i=0;i<plus.length; i++) {
   plus[i].addEventListener("click", function(){
      quantity[i].value++ ;    
 somme();
   })
  

}

// fonction moin 
for( let i=0; i<moin.length; i++) {
   moin[i].addEventListener("click", function(){
      if(quantity[i].value>0){
         quantity[i].value--;
      }
      else {quantity[i].value=0}
      somme();
   })
}

// fonction somme 
function somme ( ){
    var totalprice=0
    var q=document.getElementsByClassName("entré");
    var p=document.getElementsByClassName("price") ;
    var total=document.getElementsByClassName("total")
    
   for(let i=0;i<q.length;i++){
      totalprice= Number(q[i].value)*Number(p[i].value) +  totalprice
      // console.log(price[i].value)
      console.log(q[i].value)
      console.log(p[i].value)
      console.log(total[0].value)
    }
   //  console.log(totalprice)
    total[0].value=totalprice
    
}



