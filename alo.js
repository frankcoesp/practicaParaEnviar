//todo: callback

//?Ejemplo 1
// const generaNumero = () =>{
//     return Math.floor(Math.random()*10);
// }

// const imprimeNumero = (callback) => {
//     let numero = callback();
//     console.log(numero)
// }

// imprimeNumero(generaNumero)

//?Ejemplo 2
// const msjRandom = ()=>{
//     return ('esto es una funcion dentro de otra funcion pero demanera asincrona')
// }

// const estacionar = (callback)=>{
//     let msj = callback()
//     console.log(msj)
// }

// estacionar(msjRandom)

//todo: Callback Async
//?Ejemplo1 
// const bajaVideo = (url,callback)=>{
//     console.log(`Bajando video de ... ${url}`);
//     setTimeout(()=>{
//         console.log(`Video de ${url} descargado`)
//         callback(url)
//     },2000)
// }

// const procesaVideo = (url)=>{
//     console.log(`Procesando video de... ${url}`);
// };

// let url = 'https://www.youtube.com/watch?v=HgqNstf4xg0'
// bajaVideo(url);
// procesaVideo(url);
// bajaVideo(url,procesaVideo)

//todo:Promises son objetos que representan el resultado eventual de una operacion asincrona
//! El objeto PROMISE puede tener 3 estados:
//!a) PENDING(PENDIENTE) --> la promesa todavia no se cumplio 
//!b) RESOLVED (resuelta)--> la promesa se cumplio
//!c) REJECTED (rechazada)--> la promesa no se cumplio
//?CONSTRUCCION DE UNA PROMESA

let teHasPortadoBien =false;

const siMePortoBien = new Promise((resolve,reject)=>{
    if(teHasPortadoBien){
        const telefono = {
            modelo: 'iphone 12',
            capacidad:'128GB',
            color:'rojo'
        }
        resolve(telefono)
    }else{
        reject('te has portado mal')
    }
});

//?USO (consumo) de PROMISES
//!Antes de usar la promesa hay que definir dos funciones callback(handlers)
