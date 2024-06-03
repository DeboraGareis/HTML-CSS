function enviar(){
    var nombre=document.getElementById("fname").value; 
    var apellido=document.getElementById("lname").value; 
    if(nombre==""){
        alert("el nombre es obligatorio");
        document.getElementById("fname").focus();
        }else{
            if(apellido==""){
                alert("el apellido es obligatorio");
                document.getElementById("lname").focus();
                }else{
                    console.log(nombre+" "+apellido);
                    document.getElementById("fname").value="";
                    document.getElementById("lname").value="";
                    document.getElementById("fname").focus;
                }
        }
}