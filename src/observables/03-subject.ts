import { Observable, Observer, Subject, Subscriber } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log("siguiente[next]", value),
  error: error => console.error("error", error),
  complete: () => console.info("completado!")
};


const miInterval$ =  new Observable<number>( subs =>
  {
      setInterval( () =>
      {
        subs.next(Math.random()); 
      }, 5000)
});

/**
 * 
 * Subject: es un tipo especial de observable, pueden haber varias suscripciones
 * y les emitirá la misma información.
 *
 * Caracteristicas: 
 * - casteo multiple
 * - tambien es un observer 
 * - puede contener el Next, error y complete.
 * 
 * Primero que nada el Subject es un tipo especial de Observable.
 *  Con la diferencia que puede tener 2 perspectivas:
 *  Observable: Permite múltiple subscribe(suscriptores) y son multidifusion,
 *  vale aclarar que los observables normales son unidifusión.
 * Internamente Observador: Todo Subject internamente es un observer(observador).
 * Es un objeto con los métodos next(v), error(e)y complete(). Para alimentar 
 * un nuevo valor al Subject , simplemente llame next(theValue), y será 
 * multidifundido a los Observadores registrados para escuchar el Subject.
 * Esto quiere decir que es ambas cosas a la vez, pero depende la perspectiva
 * como lo veas puedes ser suscriptor u observador. La idea es compartir 
 * exactamente el mismo stream de datos con todas las subscripciones sin
 * preocuparnos del tipo de Observable que estamos manejando.
 * 
 * 
**/
const subject$ = new Subject<any>();

miInterval$.subscribe(subject$); 

// const subs1 = miInterval$.subscribe( random1 => {console.log(`random1 -> ${random1}`)} );
// const subs2 = miInterval$.subscribe( random2 => {console.log(`random2 -> ${random2}`)} );

console.log("mostrando data del observable"); 

const subs1 = subject$.subscribe( random1 => {console.log(`random1 -> ${random1}`)} );
const subs2 = subject$.subscribe( random2 => {console.log(`random2 -> ${random2}`)} );

setTimeout(() =>
{
  subject$.next(2001); 
  subject$.complete(); 
}, 8000)