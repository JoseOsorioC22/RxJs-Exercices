import { interval, fromEvent, takeUntil } from 'rxjs';


/**
 * TakeUntil: permite estar emitiendo valores, y se detendrá hasta que
 * otro observable emita su primer valor.
 */

const boton = document.createElement('button'); 

boton.innerHTML = 'detener Timer'; 

document.querySelector('body').append(boton); 


const counter$ = interval(1000); 
const clickBtn$ = fromEvent(boton, 'click'); 

counter$
.pipe(
    takeUntil(clickBtn$)
)
.subscribe(
    {
        next: (value) => console.log('valor'),
        complete: () => console.log('completado!!')
    }
)