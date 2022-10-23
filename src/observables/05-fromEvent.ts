import { fromEvent } from "rxjs";

/**
 * Observable que trabaja con eventos del DOM
 */

const eve1$ = fromEvent<MouseEvent>(document, 'click');
const eve2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const obsever = {
    next: val => console.log('next', val)
}

eve1$.subscribe(obsever);
eve2$.subscribe((event) =>
{
    console.log("oprimiste una tecla: " + event.key ); 
})
