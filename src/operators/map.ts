import { range, fromEvent } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators'

/**
 * Map: realiza una lectura de un flujo 
 * y transforma la información.
 */


range(1, 5)
    .pipe(map<number, string>(valor => {
        return 'numero: ' + (valor * 5).toString();
    }))
    .subscribe(console.log);

/**
 * utilizando map para fromEvent 
 */

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

/*
keyUp$
    .pipe(map<KeyboardEvent, string >( key => {
          return  key.code;  // imprimimos el keycode.
    }))
    .subscribe((data) => {
        console.log(data);
    }); 
*/
const keyUpPluck$ = keyUp$.pipe();

/**
 * Pluck: es muy util, ya que es empleado por ejemplo
 * cuando se necesita extraer un valor de una fuente de informacion o data
 * ejemplo: automovil = {color: red, mark: "tesla" }  => with pluck ('mark') => tesla 
 */

keyUp$
.pipe(pluck('target', 'baseURI'))
.subscribe( (code) => console.log('key desde fluck: ' , code)); 


// Aunque es bueno saber para que sierve el pluck, fue removido 
// desde la version 8 de rxJs, por lo tanto, se recomienda usar map.

keyUp$
.pipe( map<any , string >( key => 
    {
      return key.target.baseURI ;  //  x?.foo?.bar
    } ) )
.subscribe( (data) => console.log('imprimiendo la base uri con map' , data)); 


/**
 * El MapTo sirve para tomar una emisión del observable y
 *  transformarla en lo que tu quieras, básicamente una constante.
 *  Por ejemplo, imaginate que un posteo HTTP se ejecute correctamente
 *  pero la respuesta cambió eventualmente en el backend, y esto 
 * está rompiendo tu código en el front-end, entonces usas el mapTo, 
 * emites la respuesta que necesitas y resuelves el problema con un simple operador.
 * (aunque actualmente está @deprecated )
 */
const keyUpMapTo$ = keyUp$
.pipe(mapTo('tecla presionada')); 

keyUpMapTo$.subscribe( key => console.log( 'mapToKey', key))