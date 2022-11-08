import { distinct, of, from } from 'rxjs';

/**
 * Distinct: basicamente permite distinguir las emiciones
 * de los valores, si tenemos esta emisión: 1,2,3,1,4 ; aplicado el
 * distinct sería: 1,2,3,4
 */



const numeros$ = of(1,1,2,3,4,3,5,1,9);

numeros$
.pipe(
    distinct()
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
            nombre: 'Zero'
        }
]

from(personajes)
.pipe(
    distinct( p => p.nombre)
)
.subscribe(console.log); 
