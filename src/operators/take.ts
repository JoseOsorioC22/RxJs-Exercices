

// Not commons operators

import { of, take, tap } from "rxjs";

/**
 * Take: permite liminar las emiciones de un observable.
 * Ejemplo: take(2) => solo va a emitir dos valores.
 */

const numeros$ = of(1,2,3,4,8);

numeros$
.pipe(
    tap( t => console.log("imprimiendo desde tap: " , t)),
    take(3) // imprimirá tres emiciones solamente y cancelará la suscripcion. 
)
.subscribe(
    {
        next: value => console.log(value),
        complete: () => console.log('complete!')
    }
)