//Login con Facebook
function facebookLoginWithFirebase() {
    const provider = new firebase.auth.FacebookAuthProvider(); // creamos un nuevo objeto 

    provider.setCustomParameters({ // le decimos que haga un login con facebook y enlace un popup
        'display': 'popup'

    });

    firebase.auth().signInWithPopup(provider)
        .then(() => {
            console.log("Login con facebook exitoso");
        })
        .catch((error) => {
            console.log("Error de firebase > Código > " + error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > " + error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
}
//autenticar con Google 
function googleLoginWithFirebase() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        var user = result.user;
        console.log(user + " " + "login con google exitoso");
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}

  function goToMap() {
    const loginView = document.getElementById("loginSection");
    const mapView = document.getElementById("mapSection");
    // cambiar vistas 
    loginView.classList.remove('loginMainContainer');
    loginView.classList.add('loginMainContainerHide');
    mapView.classList.remove('mapViewMainContainer');
    mapView.classList.add('mapViewMainContainerShow');
  }
function printUserData(user){
	document.getElementById("userPicture").src = user.photoURL;
	document.getElementById("userWelcome").innerHTML = "Bienvenid@ " + user.displayName;
}


//funcion login google
function loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        var user = result.user;
        printUserData(user);
        goToMap();
    })
      //let user = result.user;
      .catch(function (error) {
        console.log('entrar' + error);
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;
  
      });
	}
	
	//Aquí va la función de cerrar sesión
function logout() {
	const loginView = document.getElementById("loginSection");
	const mapView = document.getElementById("mapSection");

  firebase.auth().signOut()
    .then(() => {
				// cambiar vistas 
			loginView.classList.remove('loginMainContainerHide');
			loginView.classList.add('loginMainContainer');
			mapView.classList.remove('mapViewMainContainerShow');
			mapView.classList.add('mapViewMainContainer');
      alert("Vuelve pronto, te extrañaremos");
    })
    .catch();
}