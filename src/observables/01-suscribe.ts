import { Observable } from "rxjs";


console.log('Hola Mundo!');




const obs$ = new Observable<string>( suscriber =>
    {
        // suscriber send values 
            suscriber.next("hola"); 
            suscriber.next("mundo"); 
// suscriber complete
            suscriber.complete();

            suscriber.next("hola"); 
            suscriber.next("mundo"); 
    });



    obs$.subscribe(  resp => {console.log(resp)})