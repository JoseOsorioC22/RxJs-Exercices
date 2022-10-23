import {asyncScheduler} from 'rxjs';

/**
 * asyncScheduler: basicamente es una herramienta para poder
 * generar el setTimeOut y el setInterval con RxJs. Es una suscripcion.
 */

/*
const saludar = (argument)  => 
{
    console.log(`mostrando...${ argument.nombre + ' ' + argument.apellido } `)
}

asyncScheduler.schedule(saludar, 2000, {nombre: 'jose', apellido: 'osorio'}); 
*/

const sub = asyncScheduler.schedule( function(state) 
{
    console.log('state', state); 
    this.schedule(state + 1, 1000); 
}, 3000, 0); 


asyncScheduler.schedule( () => {
    console.log("desuscrito")
    sub.unsubscribe()
}, 6000);