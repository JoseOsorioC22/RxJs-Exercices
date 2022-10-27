import { from, range, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators'


range(1, 10)
    .pipe(
        filter((value) => {
            console.log('llega -> ', value);
            return value % 2 === 1;
        })
    )
    .subscribe(console.log);

const personajes =
    [
        {
            tipo: "Heroe",
            nombre: "Batman"
        },
        {
            tipo: "Heroe",
            nombre: "SuperMan"
        },
        {
            tipo: "Villano",
            nombre: "Jocker"
        }
    ];


from(personajes)
.pipe(filter( (personaje) =>
{
    return personaje.tipo === 'Villano';
} ))
.subscribe( (personaje) => console.log('los personajes presentados son',personaje) )


// String of operators

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map( event => event.code), 
  filter<string>( (key) =>
  {
        return  key === 'Enter'; 
  }  )
); 

keyUp$.subscribe(ShowkeyEnter => console.log("imprimiste Enter =>" , ShowkeyEnter)); 





