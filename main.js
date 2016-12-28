function calcular(){
    var hora=document.getElementById("hora").value;
    var salida=document.getElementById("salida");
    var loro_habla=document.getElementById("loro_habla").value;
    if (loro_habla==1){
       if(hora>=1 || hora<=23){
        if(hora<=7||hora>=20 ){
          salida.innerHTML= "1";  
        }
        else
          salida.innerHTML= "0";
      }
    
    else{
        salida.innerHTML= "<h3>Ingresar la hora correctamente</h3>";
    }
 
    }
    else{
         salida.innerHTML= "0";
    }
    
}
