import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('ingresoEgreso').subscribe((ingresoEgreso) => {
      console.log(ingresoEgreso.items);
    });
  }

}
