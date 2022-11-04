import { first, fromEvent, map, tap } from 'rxjs';


const click$ = fromEvent<MouseEvent>(document, 'click'); 


click$
.pipe(
    tap( () => console.log('imprimiendo desde el tap!')),
    map( ({clientX, clientY}) => ({clientX, clientY}) ), //desestructuración
    first(event => event.clientY >= 150)
)
.subscribe(
    {
        next: (value) => console.log(value),
        complete: () => console.log("completado!!")
    }
)