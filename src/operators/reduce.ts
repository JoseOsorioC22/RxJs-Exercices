

/**
 * Reduce oprator: es un operador que basicamente hace lo mismo
 * que en javascript, basicamente va acomulando las emiciones del 
 * observable y realizando operaciones, luego, cunto se completa el observable
 * si retorna el valor; por lo que hay que saberlo implementar.
 */

 import { interval, reduce, take, tap } from "rxjs";

 const totalReducer = (acomulador: number, valorActual: number) => {
    return acomulador = acomulador + valorActual; 
 };
 
 interval(1000)
 .pipe(
     take(4), // indico cuantas emiciones a realizar (empieza desde el la emicion 0)
     tap( (dato) => console.log("mostrando emición " + dato) ), // voy mostrando emicion con el tap 
     reduce(totalReducer, 5) // se realiza reduce (para este reduce le digo que empiece a acomular desde el 5)
 )
 .subscribe({
     next: (val) => console.log("valor => " , val),
     complete: () => console.log("se completó el observable")
 })