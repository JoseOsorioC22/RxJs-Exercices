import { range, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators'

/**
 * Map: realiza una lectura de un flujo 
 * y transforma la información.
 */


range(1, 5)
    .pipe(map<number, string>(valor => {
        return 'numero: ' + (valor * 5).toString();
    }))
    .subscribe(console.log);

/**
 * utilizando map para fromEvent 
 */

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyUp$
    .pipe(map<KeyboardEvent, string >( key => {
          return  key.code;  // imprimimos el keycode.
    }))
    .subscribe((data) => {
        console.log(data);
    }); 