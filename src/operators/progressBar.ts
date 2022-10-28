import { fromEvent, map, tap } from 'rxjs';
const texto = document.createElement("div");

texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada rhoncus eros, non posuere neque maximus et. Duis in nisl enim. Praesent eu placerat mauris. Integer sit amet metus suscipit, fermentum metus non, maximus nibh. Vestibulum scelerisque augue ex, dapibus ullamcorper tellus consequat sit amet. Vivamus placerat urna nec arcu tempus blandit. Praesent lacinia, lorem eu convallis hendrerit, elit nisi elementum sapien, nec gravida orci odio eu mauris. Vivamus ullamcorper, ex sit amet porta eleifend, ex urna laoreet orci, sed gravida lacus tortor a enim. Nulla odio justo, euismod vitae lectus at, posuere sodales nulla.
<br><br>
Integer pretium ipsum id velit aliquam, at scelerisque arcu cursus. Donec lacinia convallis dictum. Curabitur sit amet justo eu sapien varius pellentesque. Mauris venenatis facilisis ipsum sed consequat. Vivamus eu nibh pulvinar, vestibulum risus sed, blandit enim. Phasellus at condimentum ex, vitae blandit ipsum. Proin sollicitudin enim nunc, sit amet consectetur enim lacinia quis. Phasellus eu ante lorem. Duis ornare diam posuere sem ullamcorper, sit amet mattis neque hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc at suscipit est. Donec pellentesque iaculis velit at tincidunt. Proin lobortis semper imperdiet. Morbi a eros augue.
<br><br>
Aliquam erat arcu, molestie sit amet malesuada id, scelerisque non neque. Morbi ornare mauris quis neque convallis, eu laoreet dui laoreet. Praesent sodales est ex, id efficitur massa ullamcorper non. Phasellus elementum luctus consequat. Duis tincidunt erat at metus porttitor volutpat. Vivamus dignissim, leo nec fringilla imperdiet, dui massa facilisis enim, nec porta purus justo quis lorem. Phasellus viverra ipsum vel odio eleifend, at ultrices ante luctus. Maecenas quis vestibulum magna. Integer vitae dui a nisi bibendum vestibulum eget at ex. Cras hendrerit gravida consectetur.
<br><br>
Nulla facilisi. Nunc sit amet tempus nulla, vel placerat massa. Nunc ullamcorper, nunc quis faucibus consequat, lorem purus iaculis felis, quis luctus lorem augue mollis odio. Curabitur quis nisl sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur mattis, augue pulvinar malesuada porttitor, nunc metus convallis tellus, ac luctus urna leo eget erat. Donec turpis mi, lobortis a elit vitae, dignissim hendrerit erat. Aliquam pellentesque, risus id feugiat ultricies, arcu mi condimentum leo, sit amet aliquam diam quam eget dui. Sed tellus erat, bibendum quis lobortis a, bibendum a lacus.
<br><br>
Donec tincidunt iaculis leo, ut pretium lacus scelerisque vel. Praesent a ipsum nulla. Nam malesuada iaculis lacus, ac vehicula purus dignissim vel. Aliquam vehicula, augue id laoreet mattis, lacus magna dignissim nibh, eget facilisis diam sem et arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus nulla dui, pretium eget lectus quis, consequat laoreet dui. Praesent tincidunt lacinia arcu sit amet egestas. Etiam eu dui cursus, lacinia nibh sit amet, bibendum ex. Sed urna ante, viverra sit amet porttitor in, malesuada vitae metus. Maecenas quis orci venenatis, interdum justo sed, imperdiet odio. Aenean eget magna tempus, pretium diam quis, euismod tellus.`;

const body = document.querySelector('body');

body.append(texto);

const progressBar = document.createElement('div'); 

progressBar.setAttribute('class', 'progress-bar'); 

body.append(progressBar);

// funcion que haga el calculo

const calcularPorcentajeScroll = (event) =>
{
    const {
          scrollTop,
          scrollHeight,
          clientHeight  
    } = event.target.documentElement; 
  
    return (scrollTop / (scrollHeight - clientHeight) ) * 100; 
}

// Streams

const scroll$ = fromEvent(document,'scroll'); 






const progres$ = scroll$.pipe( map(calcularPorcentajeScroll),
 tap(console.log) ); 


progres$.subscribe( porcentaje =>
{
    console.log("imprimiremos el porcentaje " + porcentaje)
    progressBar.style.width = `${porcentaje}%`;
});
