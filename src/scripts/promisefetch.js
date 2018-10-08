
window.dataExtractor = (jsonFile) => {
  return new Promise((resolve, reject) => {
    fetch(jsonFile) 
    .then(response => response.json())
      .then(data => { 
        const fullData = data;  
        const lugares = fullData.lugares;
        const lugaresObjArray = [];
        Object.entries(lugares).forEach(([key, value]) => {
          // console.log(key + ' ' + value); // retorna la posicion en el arra y el objeto de cada lugar (ej 0 [object object])
          Object.entries(value).forEach(([key, lugar]) => {
            // console.log('Nombre:' + lugar.nombre); // retorna los nombres!!
            lugaresObjArray.push(lugar);
            //console.log(key + ' ' + value); // retorna el nombre del lugar y un objeto con las propiedades (ej lugar1 [object object])
            // Object.entries(lugar).forEach(([property, value]) => {
              //   // console.log(property + ' ' + value); //retorna el contenido de cada lugar (ej nombre museo de arte colonial)   
              // });   
            });
            return resolve(lugaresObjArray);
        });
        // aca adentro va la funcion que haremos con esa respuesta que se recibe, reslove es ok reject es fail
  
      }).catch((error) => {
          return reject(console.log('error' + error));
          
         });
      
  });
};


