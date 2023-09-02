import { Component } from '@angular/core';
import {Observable, retry} from "rxjs";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {
  constructor() {

    const obs$ = new Observable(observer => {
      let i= -1;
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if ( i === 4){
          clearInterval(intervalo);
          observer.complete();
        }
        if(i === 2 ){
          i = 0;
          observer.error('I llego al valor de 2');
        }
      },1000)
    });

    obs$.pipe(
     retry(1)
    ).subscribe(
      valor => console.log('subs:',valor),
      (err) => console.warn('Error',err),
      () => console.info('obs terminado')
    );
  }
}