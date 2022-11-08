import { distinct, of, from, distinctUntilChanged } from 'rxjs';

/**
 * DistinctUtilChanged: basicamente es lo mismo que el distinct, pero la
 * diferencia radica en que si el valor actual (que va a emitir) es distinto
 * al valor anterior lo emite, si son iguales no
 */



const numeros$ = of(1,1,2,3,4,3,5,1,9);

numeros$
.pipe(
    distinctUntilChanged()
)
.subscribe(console.log); 

// in objects

interface Personaje
{
    nombre: string
}

const personajes: Personaje[] = 
[
        {
            nombre: 'Batman'
        },
        {
            nombre: 'Megaman'
        }
        ,
        {
            nombre: 'Zero'
        },
        {
            nombre: 'Dr. Willy'
        },
        {
            nombre: 'Megaman'
        },
        {
            nombre: 'Megaman'
        },
        {
            nombre: 'Zero'
        }
]

from(personajes)
.pipe(
    distinctUntilChanged( (ant, act) => ant.nombre === act.nombre)
)
.subscribe(console.log); 
