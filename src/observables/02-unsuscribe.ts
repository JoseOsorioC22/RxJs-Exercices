import { Observable, Observer, Subscriber } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log("siguiente[next]", value),
  error: error => console.error("error", error),
  complete: () => console.info("completado!")
};

const intervalo$ = new Observable<number>(suscriber =>
{
    //crear un contador 
    // 1,2,3,4
    let cont= 0; 

  const interval =  setInterval( () =>
    {
        cont = cont +1 ;
        console.log(cont)
        suscriber.next(cont); 
    }, 1000); 

    return () =>
    {
       clearInterval(interval); 
       console.log("intervalo completado!"); 
    }
  
})

/*
const observer: Observer<number> = {
  next: value =>  
}*/

const subs1 = intervalo$.subscribe()
const subs2 = intervalo$.subscribe()
const subs3 = intervalo$.subscribe()

setTimeout( () =>
{
    subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe();
}, 10000 )
