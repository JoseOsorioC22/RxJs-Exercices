import { of } from 'rxjs'; 

/***
 * of permite crear un observable  a partir de un 
 * flujo de datos 
 * 
 * */ 

const obs$ = of<number[]>(...[1,2], 1,2,3,4,5,6,7); 

obs$.subscribe( next => {console.log("next -> ", next)},
null,
() => console.log("terminamos"));

console.log("***************")

of(10, 20, 30)
  .subscribe({
    next: value => console.log('next:', value),
    error: err => console.log('error:', err),
    complete: () => console.log('the end'),
  });
 
// Outputs
// next: 10
// next: 20
// next: 30
// the end