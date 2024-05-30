let myslq=require("mysql");
let conexion=myslq.createConnection({
	host: "localhost",
	database: "world",
	user: "root",
	password: ""
});
conexion.connect(function(error){
	if(error){
		throw error;
	}else{
		console.log("conexion exitosa");
	}
});

const city="SELECT * FROM city";
conexion.query(city,function(error,lista){
    if(error){
        throw error;
    }else{
        console.log(lista);
    }
}
);


conexion.end();
