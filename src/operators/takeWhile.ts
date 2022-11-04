import { fromEvent, map, takeWhile } from 'rxjs';

/**
 * TakeWhile: permite mostrar el flujo mientras no 
 * se cumpla la condicion, y termina cuando se cumple la condicion.
 * El segundo valor de este operador es el inclusive, el cual permite
 * traer la ultima, que hace cumplir la condicion; por defecto es
 * false. 
 */

const click$ = fromEvent<MouseEvent>(document, 'click'); 

click$
.pipe(
    map( ({x,y}) => ({x,y})),
    takeWhile((({y}) => y >= 150 ), true)
    )
.subscribe(
    {
        next: (value) => console.log(value), 
        complete: () => console.log('completado!')
    }
)