import { from, scan } from "rxjs";

const numeros = [1,11,8,7,9]; 


/**
 * Scan: es lo mismo que el reduce, con la diferencia que no emite un solo valor
 * sino que tambien va emitiendo de a un valor.
 */

const totalAcomulador = (acc, cur) => acc + cur; 

from(numeros)
.pipe(scan(totalAcomulador,0))
.subscribe( dato => console.log(dato)); 