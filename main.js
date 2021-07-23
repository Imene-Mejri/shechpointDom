 
 
 
  


//step1: we target the element
//step2: boucle for to browse a table of elements
//step3: link the 'click' event with the  function
//step4: function (condition)


var like= document.querySelectorAll(".button-like");
console.log(like);
for (let i=0; i<like.length;i++){
   like[i].addEventListener("click",function(){

  
    if (like[i].style.color==="black"){
        like[i].style.color="red"
    }else{
        like[i].style.color='black'
    }
 console.log( like[i].parentElement.parentElement)
})
}


//step1:select the delete button
//step2:boucle...
//step3:link event-function
//step4:funtion( 1-target the parent element, 2-remove() ) /*check the DOM tree*/

var Del =document.querySelectorAll('.button-delete');
for(let i=0;i<Del.length;i++){
    Del[i].addEventListener('click',function(){
       Del[i].parentElement.remove();
       all_price()
    })
}

/*plus function*/
//step1:target the element plus
//step3: boucle for to browse the table of (buttons )
//step4:link the event and the function (we target the next sibling of the button which is the quantity) /*check the dom tree*/


var plus=document.querySelectorAll('.btn-plus')
var quantite=document.querySelectorAll('#quantite')

console.log(  quantite)

    for (let i=0;i<plus.length;i++){
    
    plus[i].addEventListener('click',function(){
        plus[i].nextElementSibling.innerHTML++;
        all_price()
       
    })
    console.log( plus[i].nextElementSibling) 
   
}


/*minus function*/
//step1:target the element minus
//step3: boucle for to browse the table of (buttons )
//step4:link the event and the function (we target the next sibling of the button which is the quantity) /*check the dom tree*/

   var minus=document.querySelectorAll('.btn-minus')
   for(let i=0;i<minus.length;i++){
      minus[i].addEventListener('click', function(){
        if (minus[i].previousElementSibling.innerHTML > 0) {
            minus[i].previousElementSibling.innerHTML--;
          }
          all_price();

          
        });

      }  

      
// the calculation needed: total=  somme (itemPrice[i]*quatity )
// step1: target the elements needed in the calculation
//step2: declare a variable that will be updated with each product
//step3:loop the items so we can sum the price of each item
//step3: update the total price and change the html elemnt value with the updated price
   

function all_price(){
    var elem_price=document.querySelectorAll('.element-price');
    var qauntite=document.querySelectorAll('#quantite');
    
    var total=0;
    for(let i=0;i<elem_price.length ;i++){
        
            total=total + (elem_price[i].innerHTML*qauntite[i].innerHTML);
            document.getElementById('total').innerHTML=total
          

        }
    
        console.log(document.getElementById('total'))
    }
    
   

    
  


