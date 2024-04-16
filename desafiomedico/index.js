const http = require('http');
const axios = require ('axios');
const chalk = require('chalk');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const _ = require('lodash');
const PORT = '8080';


let usuarios = [];


http.createServer((req,res) => {

       
        if (req.url.includes('/registrar')) {
                axios
                    .get('https://randomuser.me/api/')
                    .then((data) => {
                        const nombre = data.data.results[0].name.first;
                        const apellido = data.data.results[0].name.last;
                        const id =  uuidv4().slice(0,6);
                        const timestamp = moment().format('MMM Do YYYY, h:mm:ss a'); 
                        
                        usuarios.push(
                            {
                            nombre: nombre,
                            apellido: apellido,
                            id: id,
                            timestamp: timestamp
                        });
                        console.log('Usuario registrado con éxito');
                        
                    })
                    .catch((e) => {
                        console.log(e);
                    })

                    res.end();
            }

        
            if (req.url.includes('/consulta')) {

                let i = 1;

                _.forEach(usuarios,(e) => {
                    
                    console.log(chalk.bgWhite.blue(`${i}. Nombre: ${e.nombre} - Apellido: ${e.apellido} - Id: ${e.id} - Timestamp: ${e.timestamp}`));
                   i++;
                })
            }  
            res.end();            
    })
    

    .listen(PORT, () => console.log('Iniciado en puerto ' + PORT));
   
  


       





    


    

