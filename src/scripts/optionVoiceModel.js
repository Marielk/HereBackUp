
const artyom = new Artyom();

artyom.addCommands([
    {
     description:"artyom can talk too,lets say something if we say hello",
     indexes:["hola","buscar"],
     action:function(i){

        if(i == 0){
            artyom.say("hola, indicame tu sitio de interes");
        }
     }   
    },
    { indexes:["adios"],
    action:function(){
        alert("now all is over.");
    }
  }
]);

artyom.redirectRecognizedTextOutput(function(text,isFinal){
    let span = document.getElementById("output");
    if(isFinal){
        span.innerHTML = "";
    }else{
        span.innerHTML = text;
    }
});
function starArtyom(){
    var isChecked = document.getElementById('checkbox1').checked;
    console.log(isChecked);
     if(isChecked){
         // Start the commands !
            artyom.initialize({
                lang: "es-ES", // GreatBritain english
                continuous: true, // Listen forever
                soundex: true,// Use the soundex algorithm to increase accuracy
                debug: true, // Show messages in the console
                executionKeyword: "and do it now",
                listen: true, // Start to listen commands !
                
            }).then(() => {
                artyom.say("hola soy Asistente personal estoy aqui para ayudarte");
                console.log("Artyom has been succesfully initialized");
            }).catch((err) => {
                console.error("Artyom couldn't be initialized: ", err);
            });

    }else{
        artyom.fatality().then(() => {
            // The default configuration is kept
            // that means spanish mode
            artyom.say("Adios !");
        });
    }

   
}
