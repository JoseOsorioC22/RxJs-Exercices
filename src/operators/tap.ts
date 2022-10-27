
import { map, range, tap } from "rxjs";


/**
 * Tap operator: es un operador el cual tiene como caracteristica
 * generar efectos secundarios en el observable, disparar alguna accion
 * cuando sea emitido algun valor. El tap tambien es util cuando se desea
 * realizar depuración. 
 */

const numeros$ = range(1,5); 


numeros$
.pipe( tap( num => 
    {
        console.log(num);
        return "1100"; // no va a afectar, es muy util para depuraciones.
    }), 
  map( numero => numero * 2 ), 
  tap(numero => console.log('tap despues => ', numero))
)
.subscribe( num => console.log('print from suscription => ' , num)); 

