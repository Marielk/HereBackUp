// variables para guardar las propiedades de cada lugar
let placeName = [];
let coords = [];
let imgUrl= [];
let adress = [];
let text = [];
let access = [];
let bathroom = [];
let guide = [];
let visit = [];

let objectArray = [];

window.onload = () => {
  // // usar promesa para traer info 
  window.dataExtractor('/src/scripts/santiagov2.json').then((result) => {
    // console.log('promesa ejecutada' + result);  
    // aqui la funcion que queremos hacer con el resultado. 
    // variables para guardar las propiedades de cada lugar

    result.forEach(lugar => {
      placeName.push(lugar.nombre);
      // imgUrl.push(lugar.img);
      // adress.push(lugar.direccion);
      // coords.push(lugar.coordenadas);
      // text.push(lugar.description);
      // access.push(lugar.acceso);
      // bathroom.push(lugar.bano);
      // guide.push(lugar.audioguia);
      // visit.push(lugar.visitasGuiadas);      
    });

    result.forEach(lugar => {
      objectArray.push({
        placeName : lugar.nombre,
        imgUrl:lugar.img,
        adress:lugar.direccion,
        coords:lugar.coordenadas,
        text:lugar.description,
        access:lugar.acceso,
        bathroom:lugar.banos,
        guide:lugar.audioguia,
        visit:lugar.visitasGuiadas
      });

      
    });

  }); 
  
};

//crear la lista 
window.createList = () => {
  // console.log('Nombre: '+ placeName );

  // crear elemento y dar parentesco con appenChild
  const showNewList = document.getElementById('placeNewList');
  showNewList.classList.remove('hidden');
  showNewList.classList.add('show');
  //crear elemento div 
  const newList = document.createElement('ul');
  newList.id = "list";
  newList.classList.add("list-group");//dar estilo
  showNewList.appendChild(newList); //parentesco
  // imprimir solo vista
  let counter = 0; 
  for(let a=0; a < placeName.length; a++ ){
    counter++;
    let buttonID = 'button'+counter;
     let nombre = placeName[a];
     let replace = nombre.replace(/ /g, "");
     let cardID = replace.toLowerCase();
      newList.innerHTML += 
            `
            <button type="button" id="${buttonID}"  onclick="printInfo(this.id)" class="btn btn-info">
            ${nombre}
            </button>
            <div id="${cardID}">
            
            </div>
          </div>
            `;
             
          }
         
          
};


// imprimir resultado dentro de la lista

const printInfo = (counter) => { 
  // console.log('id' + counter);
  
  // recoger id de boton y su nombre
  const btn = document.getElementById(counter);
  
  let nombre = document.getElementById(counter).outerText;
  let replace = nombre.replace(/ /g, "");
  let cardID = replace.toLowerCase();
  //aparecer el elemento 
  let cardContent = document.getElementById(cardID);
  cardContent.classList.add("collapse");
  btn.setAttribute("data-toggle", "collapse");
  btn.setAttribute("data-target", `#${cardID}`);
  // console.log(btn);
  
  // buscar su match 
  let matchObject = objectArray.find((element) => {
    if (element.placeName === nombre) {
      return element;
    }
  });
  // console.log(matchObject);
    let img = matchObject.imgUrl;
    let direc = matchObject.adress;
    let coor = matchObject.coords;
    let text = matchObject.text;
    let acces = matchObject.access;
    let bano = matchObject.bathroom;
    let guia = matchObject.guide;
    let visita = matchObject.visit; 

  // imprimir solo vista
    cardContent.innerHTML = 
      `
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${img}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text subTitle">Dirección</p>
          <p class="card-text">${direc}</p>
          <p class="card-text subTitle">Acerca del lugar</p>
          <p class="card-text">${text}</p>
          <p class="card-text subTitle">Nivel de accesibilidad</p>
        </div>  
      </div> `;
};



// const printButton = () => {
//   let counter = 0;
//   for(let a=0; a < placeName.length; a++ ){
//     let nombre = placeName[a];
//     counter++;
//     const list = document.getElementById('list');
//     list.innerHTML += `<button id="${nombre}" onclick= "${printInfo(nombre,counter)}" class="btn btn-primary" type="button" data-toggle="collapse" data-target="#${counter}" aria-expanded="false" aria-controls="${counter}">
//     Ver Lugar
//   </button>`;
//   }
// };