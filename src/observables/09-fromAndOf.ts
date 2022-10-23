import {of, from} from 'rxjs'; 

/**
 * of = toma argumentos y genera una secuencia
 * from = crea un observable en base a un array, promise, observable, iterable etc.
 */

const observer = {
    next: val => console.log('next', val),
    complete: () => {console.log("completado!!")}
}

const source$ = from([1,2,3,4,5,33,21,22,19]); 
const source2$ = from("Jose"); 
const sourceReadAPI$ = from (fetch("https://api.github.com/users/JoseOsorioC22"))

//source$.subscribe(observer); 
// imprimirá el nombre letra por letra.
//source2$.subscribe(observer); 

sourceReadAPI$.subscribe(observer); 


// the same result with a iterable.

const miGenerator = function*()
{
        yield 11,
        yield 22,
        yield 26,
        yield 17,
        yield 80
}
const myIterable = miGenerator(); 

from(myIterable).subscribe(observer); 



