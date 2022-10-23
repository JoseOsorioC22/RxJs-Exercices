import {interval, timer} from 'rxjs';

const observer = 
{
    next: val => console.log('next: ', val),
    complete: () => console.log("completado")
}


/**
 * interval: hace un intervalo de tiempo y emite un
 * valor.
 * 
 * timer: permite emitir un valor en un intevalo de
 * tiempo y se completa.
 *  
 * el primer valor tanto para el interval como el
 * timer es 0. Ademas por defecto son asincronos. 
 */

console.log("inicio"); 

const interval$ = interval(1000); 
const timer$ = timer(2000); 

//interval$.subscribe(observer); 
// timer$.subscribe(observer);
console.log("fin");

// defino que se ejecutará tarea en 5 segundos.
const hoyEn5$ = new Date(); // ahora
hoyEn5$.setSeconds(hoyEn5$.getSeconds() + 5);

const timerEn5$ = timer(hoyEn5$);

timerEn5$.subscribe(observer); 

