//Lista as Pizza, Mapaear
//cloneNode para clona Item no codigo.


const j = (el)=>document.querySelector(el);
const js = (el)=>document.querySelectorAll(el);

pizzaJson.map((pizza, index)=>{
   let pizzaItem =j('.models .pizza-item').cloneNode(true);
   
   j('.pizza-area').append( pizzaItem);
});




