
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
      // console.log(fullData.lugar1.nombre);
      
      // obtener solo el nombre de cada lugar
      let nombres = [fullData.lugar1.nombre, fullData.lugar2.nombre,fullData.lugar3.nombre,fullData.lugar4.nombre,fullData.lugar5.nombre,fullData.lugar6.nombre,fullData.lugar7.nombre,fullData.lugar8.nombre,fullData.lugar9.nombre,fullData.lugar10.nombre,fullData.lugar11.nombre,fullData.lugar12.nombre,fullData.lugar13.nombre,fullData.lugar14.nombre,fullData.lugar15.nombre,fullData.lugar16.nombre,fullData.lugar17.nombre,fullData.lugar18.nombre,fullData.lugar19.nombre,fullData.lugar20.nombre,fullData.lugar21.nombre,fullData.lugar22.nombre,fullData.lugar23.nombre,fullData.lugar24.nombre,fullData.lugar25.nombre,fullData.lugar26.nombre,fullData.lugar27.nombre,fullData.lugar28.nombre,fullData.lugar29.nombre,fullData.lugar30.nombre,fullData.lugar31.nombre,fullData.lugar32.nombre,fullData.lugar33.nombre,fullData.lugar34.nombre,fullData.lugar35.nombre,fullData.lugar36.nombre,fullData.lugar37.nombre,fullData.lugar38.nombre,fullData.lugar39.nombre];

      //imagen
      let images = [fullData.lugar1.img, fullData.lugar2.img,fullData.lugar3.img,fullData.lugar4.img,fullData.lugar5.img,fullData.lugar6.img,fullData.lugar7.img,fullData.lugar8.img,fullData.lugar9.img,fullData.lugar10.img,fullData.lugar11.img,fullData.lugar12.img,fullData.lugar13.img,fullData.lugar14.img,fullData.lugar15.img,fullData.lugar16.img,fullData.lugar17.img,fullData.lugar18.img,fullData.lugar19.img,fullData.lugar20.img,fullData.lugar21.img,fullData.lugar22.img,fullData.lugar23.img,fullData.lugar24.img,fullData.lugar25.img,fullData.lugar26.img,fullData.lugar27.img,fullData.lugar28.img,fullData.lugar29.img,fullData.lugar30.img,fullData.lugar31.img,fullData.lugar32.img,fullData.lugar33.img,fullData.lugar34.img,fullData.lugar35.img,fullData.lugar36.img,fullData.lugar37.img,fullData.lugar38.img,fullData.lugar39.img];

      // direccion 

      let direccion = [fullData.lugar1.direccion, fullData.lugar2.direccion,fullData.lugar3.direccion,fullData.lugar4.direccion,fullData.lugar5.direccion,fullData.lugar6.direccion,fullData.lugar7.direccion,fullData.lugar8.direccion,fullData.lugar9.direccion,fullData.lugar10.direccion,fullData.lugar11.direccion,fullData.lugar12.direccion,fullData.lugar13.direccion,fullData.lugar14.direccion,fullData.lugar15.direccion,fullData.lugar16.direccion,fullData.lugar17.direccion,fullData.lugar18.direccion,fullData.lugar19.direccion,fullData.lugar20.direccion,fullData.lugar21.direccion,fullData.lugar22.direccion,fullData.lugar23.direccion,fullData.lugar24.direccion,fullData.lugar25.direccion,fullData.lugar26.direccion,fullData.lugar27.direccion,fullData.lugar28.direccion,fullData.lugar29.direccion,fullData.lugar30.direccion,fullData.lugar31.direccion,fullData.lugar32.direccion,fullData.lugar33.direccion,fullData.lugar34.direccion,fullData.lugar35.direccion,fullData.lugar36.direccion,fullData.lugar37.direccion,fullData.lugar38.direccion,fullData.lugar39.direccion];

      // description

      let description = [fullData.lugar1.description, fullData.lugar2.description,fullData.lugar3.description,fullData.lugar4.description,fullData.lugar5.description,fullData.lugar6.description,fullData.lugar7.description,fullData.lugar8.description,fullData.lugar9.description,fullData.lugar10.description,fullData.lugar11.description,fullData.lugar12.description,fullData.lugar13.description,fullData.lugar14.description,fullData.lugar15.description,fullData.lugar16.description,fullData.lugar17.description,fullData.lugar18.description,fullData.lugar19.description,fullData.lugar20.description,fullData.lugar21.description,fullData.lugar22.description,fullData.lugar23.description,fullData.lugar24.description,fullData.lugar25.description,fullData.lugar26.description,fullData.lugar27.description,fullData.lugar28.description,fullData.lugar29.description,fullData.lugar30.img,fullData.lugar31.description,fullData.lugar32.description,fullData.lugar33.img,fullData.lugar34.description,fullData.lugar35.description,fullData.lugar36.description,fullData.lugar37.description,fullData.lugar38.description,fullData.lugar39.description];

      //accesos

      let accesos = [fullData.lugar1.accesos, fullData.lugar2.accesos,fullData.lugar3.accesos,fullData.lugar4.accesos,fullData.lugar5.accesos,fullData.lugar6.accesos,fullData.lugar7.accesos,fullData.lugar8.accesos,fullData.lugar9.accesos,fullData.lugar10.accesos,fullData.lugar11.accesos,fullData.lugar12.accesos,fullData.lugar13.accesos,fullData.lugar14.accesos,fullData.lugar15.accesos,fullData.lugar16.accesos,fullData.lugar17.accesos,fullData.lugar18.accesos,fullData.lugar19.accesos,fullData.lugar20.accesos,fullData.lugar21.accesos,fullData.lugar22.accesos,fullData.lugar23.accesos,fullData.lugar24.accesos,fullData.lugar25.accesos,fullData.lugar26.accesos,fullData.lugar27.accesos,fullData.lugar28.accesos,fullData.lugar29.accesos,fullData.lugar30.accesos,fullData.lugar31.accesos,fullData.lugar32.accesos,fullData.lugar33.accesos,fullData.lugar34.accesos,fullData.lugar35.accesos,fullData.lugar36.accesos,fullData.lugar37.accesos,fullData.lugar38.accesos,fullData.lugar39.accesos];

      //baños

      let wc = [fullData.lugar1.wc, fullData.lugar2.wc,fullData.lugar3.wc,fullData.lugar4.wc,fullData.lugar5.wc,fullData.lugar6.wc,fullData.lugar7.wc,fullData.lugar8.wc,fullData.lugar9.wc,fullData.lugar10.wc,fullData.lugar11.wc,fullData.lugar12.wc,fullData.lugar13.wc,fullData.lugar14.wc,fullData.lugar15.wc,fullData.lugar16.wc,fullData.lugar17.wc,fullData.lugar18.wc,fullData.lugar19.wc,fullData.lugar20.wc,fullData.lugar21.wc,fullData.lugar22.wc,fullData.lugar23.wc,fullData.lugar24.wc,fullData.lugar25.wc,fullData.lugar26.wc,fullData.lugar27.wc,fullData.lugar28.wc,fullData.lugar29.wc,fullData.lugar30.wc,fullData.lugar31.wc,fullData.lugar32.wc,fullData.lugar33.wc,fullData.lugar34.wc,fullData.lugar35.wc,fullData.lugar36.wc,fullData.lugar37.wc,fullData.lugar38.wc,fullData.lugar39.wc];

      //audio guia

      let audioGuia = [fullData.lugar1.audioGuia, fullData.lugar2.audioGuia,fullData.lugar3.audioGuia,fullData.lugar4.audioGuia,fullData.lugar5.audioGuia,fullData.lugar6.audioGuia,fullData.lugar7.audioGuia,fullData.lugar8.audioGuia,fullData.lugar9.audioGuia,fullData.lugar10.audioGuia,fullData.lugar11.audioGuia,fullData.lugar12.audioGuia,fullData.lugar13.audioGuia,fullData.lugar14.audioGuia,fullData.lugar15.audioGuia,fullData.lugar16.audioGuia,fullData.lugar17.audioGuia,fullData.lugar18.audioGuia,fullData.lugar19.audioGuia,fullData.lugar20.audioGuia,fullData.lugar21.audioGuia,fullData.lugar22.audioGuia,fullData.lugar23.audioGuia,fullData.lugar24.audioGuia,fullData.lugar25.audioGuia,fullData.lugar26.audioGuia,fullData.lugar27.audioGuia,fullData.lugar28.audioGuia,fullData.lugar29.audioGuia,fullData.lugar30.audioGuia,fullData.lugar31.audioGuia,fullData.lugar32.audioGuia,fullData.lugar33.audioGuia,fullData.lugar34.audioGuia,fullData.lugar35.audioGuia,fullData.lugar36.audioGuia,fullData.lugar37.audioGuia,fullData.lugar38.audioGuia,fullData.lugar39.audioGuia];

      //visitas guiadas

      let visitas = [fullData.lugar1.visitas, fullData.lugar2.visitas,fullData.lugar3.visitas,fullData.lugar4.visitas,fullData.lugar5.visitas,fullData.lugar6.visitas,fullData.lugar7.visitas,fullData.lugar8.visitas,fullData.lugar9.visitas,fullData.lugar10.visitas,fullData.lugar11.visitas,fullData.lugar12.visitas,fullData.lugar13.visitas,fullData.lugar14.visitas,fullData.lugar15.visitas,fullData.lugar16.visitas,fullData.lugar17.visitas,fullData.lugar18.visitas,fullData.lugar19.visitas,fullData.lugar20.visitas,fullData.lugar21.visitas,fullData.lugar22.visitas,fullData.lugar23.visitas,fullData.lugar24.visitas,fullData.lugar25.visitas,fullData.lugar26.visitas,fullData.lugar27.visitas,fullData.lugar28.visitas,fullData.lugar29.visitas,fullData.lugar30.visitas,fullData.lugar31.visitas,fullData.lugar32.visitas,fullData.lugar33.visitas,fullData.lugar34.visitas,fullData.lugar35.visitas,fullData.lugar36.visitas,fullData.lugar37.visitas,fullData.lugar38.visitas,fullData.lugar39.visitas];

      //coordenadas

      let coords = [fullData.lugar1.coords, fullData.lugar2.coords,fullData.lugar3.coords,fullData.lugar4.coords,fullData.lugar5.coords,fullData.lugar6.coords,fullData.lugar7.coords,fullData.lugar8.coords,fullData.lugar9.coords,fullData.lugar10.coords,fullData.lugar11.coords,fullData.lugar12.coords,fullData.lugar13.coords,fullData.lugar14.coords,fullData.lugar15.coords,fullData.lugar16.coords,fullData.lugar17.coords,fullData.lugar18.coords,fullData.lugar19.coords,fullData.lugar20.coords,fullData.lugar21.coords,fullData.lugar22.coords,fullData.lugar23.coords,fullData.lugar24.coords,fullData.lugar25.coords,fullData.lugar26.coords,fullData.lugar27.coords,fullData.lugar28.coords,fullData.lugar29.coords,fullData.lugar30.coords,fullData.lugar31.coords,fullData.lugar32.coords,fullData.lugar33.coords,fullData.lugar34.coords,fullData.lugar35.coords,fullData.lugar36.coords,fullData.lugar37.coords,fullData.lugar38.coords,fullData.lugar39.coords];


        // console.log(nombres);
        let placeName;
        let imgUrl;
        let adress;
        let text;
        let access;
        let bathroom;
        let guide;
        let visit;

       
        for(let a=0; a < nombres.length; a++ ){
          placeName = nombres[a];
          for(let b=0; b < description.length; b++ ){
            text = description[b]; 
            
            //imprimir con template string una lista de lugares poniendo el nombre en el id del boton y en el texto que contiene el elemento 
          } 
          newList.innerHTML += 
          `
          <li class="list-group-item">
            ${placeName}
            <button id="${placeName}" class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Ver Lugar
            </button>
            <div class="collapse" id="collapseExample">
              <div class="card card-body">
                ${text}
              </div>
            </div>
          </li>
          `;
        
         // console.log(placeName);
            
            
            
          }
        }
    );
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
