import { from, map, scan } from "rxjs";

const numeros = [1,11,8,7,9]; 


/**
 * Scan: es lo mismo que el reduce, con la diferencia que no emite un solo valor
 * sino que tambien va emitiendo de a un valor.
 */

const totalAcomulador = (acc, cur) => acc + cur; 

from(numeros)
.pipe(scan(totalAcomulador,0))
.subscribe( dato => console.log(dato)); 


// redux pattern 

interface Usuario{
    id?: string,
    autenticado?:boolean,
    token?: string,
    edad?: number
}


const user: Usuario[] = [
    {id: "223", autenticado: true , token: "JJKSKs"},
    {id: "223", autenticado: false , token: ""},
    {id: "223", autenticado: false , token: ""}
]


const state$ = from(user)
.pipe(
    scan<Usuario>(  (acc, cur) =>
    {
        return { ...acc , ...cur}
    } )
); 

const id$= state$.pipe(
    map( state => state.id)
)


id$.subscribe(console.log)

