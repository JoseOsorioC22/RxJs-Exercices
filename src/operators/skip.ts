import { interval, fromEvent, takeUntil, skip, tap } from 'rxjs';


/**
 * Skip: dice basicamente cuantas emiciones se va a saltar.
 */

const boton = document.createElement('button'); 

boton.innerHTML = 'detener Timer'; 

document.querySelector('body').append(boton); 


const counter$ = interval(1000); 
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap( () => console.log('antes del skip!')),
    skip(1), 
    tap( () => console.log('despues del skip!'))
    ); 

counter$
.pipe(
    takeUntil(clickBtn$)
)
.subscribe(
    {
        next: (value) => console.log('next', value),
        complete: () => console.log('completado!!')
    }
)