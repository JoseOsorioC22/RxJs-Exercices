import {asyncScheduler, range} from 'rxjs'

/**
 * Range: observable que emite una secencia de numeros
 * en base a un rango. por defecto es sincrono. Lo que hace es
 * lanzar emiciones, para el ejemplo emitirá 30 datos, comenzando por el 21 hasta
 * los siguientes 30 restantes. El valor por defecto del start es 0.
 * Podriamos convertirlo en un observable asincrono con asynsheduler.
 */

const src$ = range(21,30, asyncScheduler); 
let i=1; 
console.log("inicio"); 

src$.subscribe(element => console.log("element " + i ++, element)); 

console.log("fin"); 