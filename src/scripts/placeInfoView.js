
// cambiar la vista
const changeView = () => {
  const mapView = document.getElementById('mapSection');
  const placeInfoList = document.getElementById('placeList'); 
  mapView.classList.add('mapViewMainContainer');
  mapView.classList.remove('mapViewMainContainerShow');
  placeInfoList.classList.remove('placeListMainContainer');
  placeInfoList.classList.add('placeListMainContainerActive');
  createList();
};

//crear la lista 
const createList = () => {
  // crear elemento y dar parentesco con appenChild
  const showNewList = document.getElementById('placeNewList');
  showNewList.classList.remove('hidden');
  showNewList.classList.add('show');
  //crear elemento div 
  const newList = document.createElement('ul');
  newList.classList.add("list-group");//dar estilo
  showNewList.appendChild(newList); //parentesco
  fetch('../santiago.json') 
  .then(response => response.json())
    .then(data => { 
      //obteniendo informacion de todos los lugares
      const fullData = data;
      console.log(fullData.lugar1);
      
      // obtener solo el nombre de cada lugar
      
      
   
        
        //imprimir con template string una lista de lugares poniendo el nombre en el id del boton y en el texto que contiene el elemento 
        newList.innerHTML += 
        `
        <li class="list-group-item">
          ${placeName}
          <button id="${placeName}" class="btn">
            Ver Lugar
          </button>
        </li>
        `;
        }
    });
};



// fetch al json para traer toda la info 
const printPlaceInfo = () =>{
	fetch('../santiago.JSON') 
	.then(response => response.json())
	.then(data => { 
		//obteniendo informacion de todos los lugares
    const fullData = data;
    // imprimir foto en el lugar

    // imprimir info del lugar

    // imprimir estado de opciones accesibles
  });
};

// boton de volver atras 
document.getElementById('backButton').addEventListener('click', function(){
  changeViewBack();
});

// cambiar la vista para atras
const changeViewBack = () => {
  const mapView = document.getElementById('mapSection');
  const placeInfoView = document.getElementById('placeSection'); 
  mapView.classList.remove('mapViewMainContainer');
  mapView.classList.add('mapViewMainContainerShow');
  placeInfoView.classList.remove('placeInfoMainContainerShow');
  placeInfoView.classList.add('placeInfoMainContainer');
};
