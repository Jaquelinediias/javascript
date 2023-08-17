//Lista as Pizza, Mapaear
//cloneNode para clona Item no codigo.


const j = (el)=>document.querySelector(el);
const js = (el)=>document.querySelectorAll(el);

pizzaJson.map((item, index)=>{
   let pizzaItem = j('.models .pizza-item').cloneNode(true);
   // preenche as informações em pizzaItem

   pizzaItem.querySelector('.pizza-item--img').src = item.img;
   pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
   pizzaItem.querySelector('.pizza-item--price').innerHTML = `RS ${item.price.toFixed(2)}`;
   pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

  

   j('.pizza-area').append( pizzaItem);
});




