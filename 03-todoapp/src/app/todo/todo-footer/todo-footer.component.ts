import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../filter/filter.actions';
import * as fromTodo from '../../todo/todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  pendientes: number;
  filtrosValidos: fromFiltro.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltro.filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.contarPendientes(state.todos);
    });
  }

  cambiarFiltro(filtro: fromFiltro.filtrosValidos) {
    const accion = new fromFiltro.SetFiltroAction(filtro);
    this.store.dispatch(accion);
  }

  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter((todo) => {
      return todo.completado === false;
    }).length;
  }

  borrarCompletados() {
    const accion = new fromTodo.BorrarCompletadosAction();
    this.store.dispatch(accion);
  }

}
