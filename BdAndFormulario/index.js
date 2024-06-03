const express = require("express");
const app = express();
const mysql = require("mysql");
let conexion = mysql.createConnection({
    host:"localhost", database:"administracion",user:"root",password:""
});
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//mensaje de prueba con get
//app.get("/",function(req,res){res.send("buenos dias!!!")})

//ruta de archivos estaticos
//app.use(express.static("public"));

app.set("view engine", "ejs");
app.get("/", function(req,res){res.render("registro")});

app.post("/validar",function(req,res){
    const datos =req.body;
    let nom=datos.nombre;
    let ape=datos.apellido;
    let ciu=datos.ciudad;
    let lib=datos.libro;

    let consulta="INSERT INTO usuarios (Nombre,Apellido,Ciudad,LibroID) VALUES ('"+nom+"','"+ape+"','"+ciu+"','"+lib+"')";
    
    conexion.query(consulta, function(error){
        if(error){
            throw error;
        }else{
            console.log("datos almacenados correctamente");
        }
    });
    

});


//Puerto para el servidor local
app.listen(3000,function(){
    console.log("Servidor local: http://localhost:3000");
})



