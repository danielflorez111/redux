import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from './filter.actions';
import { Todo } from '../todo/model/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos, args?: any): Todo[] {

    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.completado);

      case 'pendientes':
        return todos.filter(todo => !todo.completado);

      default:
        return todos;;
    }
  }

}
