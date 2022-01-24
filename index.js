const http = require("http");
const bodyParser = require('body-parser')

const hostname = "127.0.0.1";
const express = require("express");
const path = require("path");

const moment = require("moment");




const app = express();
const port = process.env.PORT || "8000";

const Data = require('./entidades/data.js');
const Utils = require('./Utils/utils.js');

let simuladorBase = [];

let data = new Data("ci-1", "Juan David", "Martinez Diaz", "Av. Juan Montalvo s-21","12-10-1990", true, 0, 23.56) 

simuladorBase.push(data);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("WHATABYTE: Food For Devs");
});

app.get("/data", (req, res) => {
  res.status(200).send(simuladorBase);
});

app.put("/data", (req, res) => {

    let newData = new Data(req.body.CodUsuario,req.body.Nombres,req.body.Apellidos,req.body.Direccion,req.body.FechaDeNacimiento,req.body.CuentaActiva, req.body.NroHijos, req.body.Saldo) 
    
    const fechaCumple = moment(newData.FechaDeNacimiento, 'DD-MM-YYYY')

    const age = moment().diff(fechaCumple, 'years');
    const isLegal = (age >= 18);     
 
    if((parseInt(newData.NroHijos, 10)>= 0 && parseFloat(newData.Saldo)>= 0)){
        
        if(isLegal){
            simuladorBase.push(newData);
            res.status(200).send(newData);
        }else  {
            res.status(200).send("Cliente menor de edad");
        }
    }else{
        res.status(200).send("El saldo y el numero de hijos debe ser mayor o igual 0"); 
    }

      
  });
  
  app.delete("/data", (req, res) => {

    let newData = new Data(req.body.CodUsuario,req.body.Nombres,req.body.Apellidos,req.body.Direccion,req.body.FechaDeNacimiento,req.body.CuentaActiva, req.body.NroHijos, req.body.Saldo) 
    
    resultado = Utils.findInObjectArray(simuladorBase,"CodUsuario",newData.CodUsuario)
 
    if(resultado){
        res.status(200).send("Usuario Eliminado");
    }else{  
        res.status(200).send("No se encontro el usuario");
    }    
  });

  app.patch("/data", (req, res) => {

    let newData = new Data(req.body.CodUsuario,req.body.Nombres,req.body.Apellidos,req.body.Direccion,req.body.FechaDeNacimiento,req.body.CuentaActiva, req.body.NroHijos, req.body.Saldo) 
    
    resultado = Utils.findInObjectArray(simuladorBase,"CodUsuario",newData.CodUsuario)
 
    if(resultado){
        simuladorBase.push(newData);
        res.status(200).send(newData);
    }else{  
        res.status(200).send("No se encontro el usuario para actualizar");
    }    
  });


app.listen(port, () => {
    
  console.log(`Listening to requests on http://localhost:${port}`);
});
