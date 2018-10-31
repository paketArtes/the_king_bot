'use strict';

//esta linea es para tomar parametros de consola
//slice es para tomar el 2 valor q es el del parametro ingresado


var parametros = process.argv.slice(2);


console.log(parametros);
/**
 *comando:  node calculadora.js parametro

 * regresa:  ['parametro']
 **/