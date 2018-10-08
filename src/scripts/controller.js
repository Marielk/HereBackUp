// funcionalidad botones de opcion 

const check1 = document.getElementById('checkbox1');
check1.addEventListener("change", validaCheckbox, false); 

const check2 = document.getElementById('checkbox2');
check2.addEventListener("change", validaCheckbox2, false); 

function validaCheckbox(){
  const slider1 = document.getElementById('slider1');
  const bolita1 = document.getElementById('bolita1');
  var checked = check1.checked;
  if(checked){
    slider1.classList.remove('slider');
    slider1.classList.add('slider-isActive');
    bolita1.classList.remove('bolita');
    bolita1.classList.add('bolita-isActive');
  }else{
    slider1.classList.remove('slider-isActive');
    slider1.classList.add('slider');
    bolita1.classList.remove('bolita-isActive');
    bolita1.classList.add('bolita');
  }
}

function validaCheckbox2(){
  const slider2 = document.getElementById('slider2');
  const bolita2 = document.getElementById('bolita2');
  var checked = check2.checked;
  if(checked){
    slider2.classList.remove('slider');
    slider2.classList.add('slider-isActive');
    bolita2.classList.remove('bolita');
    bolita2.classList.add('bolita-isActive');
  }else{
    slider2.classList.remove('slider-isActive');
    slider2.classList.add('slider');
    bolita2.classList.remove('bolita-isActive');
    bolita2.classList.add('bolita');
  }
}

// funciones cambiar vista desde mapa para mostrar lista de lugares
// cambiar la vista
const changeView = () => {
  const mapView = document.getElementById('mapSection');
  const placeInfoList = document.getElementById('placeList'); 
  mapView.classList.add('mapViewMainContainer');
  mapView.classList.remove('mapViewMainContainerShow');
  placeInfoList.classList.remove('placeListMainContainer');
  placeInfoList.classList.add('placeListMainContainerActive');
  window.createList();
};

// boton de volver atras 
document.getElementById('backButtonList').addEventListener('click', () => {
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