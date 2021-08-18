const express = require("express");
const app = express();

// configurando o template engine
app.set("view engine", "ejs");

//app.set("views", path.resolve("views"));


app.listen(8000,()=> {

    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());


    app.get('/',(req,res)=> {
        res.sendFile(__dirname + "/views/home.html");
    
    });
 

    app.get('/home',(req,res)=>{
        res.sendFile(__dirname + "/views/home.html");
      

    });

    app.get('/detalhes',(req,res)=>{
        res.sendFile(__dirname + "/views/detalhes.html");
      

    });

    app.get('/categorias',(req,res)=>{
        res.sendFile(__dirname + "/views/categorias.html");
      

    });
      

    console.log('Servidor Rodando')
});
