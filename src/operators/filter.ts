import { from, range } from 'rxjs';
import { filter } from 'rxjs/operators'


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
