import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar el mundo');
todo2.completado = true;

const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[] {
    switch (action.type) {
        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [...state, todo];

        case fromTodo.TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        completado: !todo.completado
                    }
                } else {
                    return todo;
                }
            });

        case fromTodo.TOGGLEALL_TODO:
            return state.map(todo => {
                return {
                    ...todo,
                    completado: action.completado
                }
            });

        case fromTodo.EDITAR_TODO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        texto: action.texto
                    }
                } else {
                    return todo;
                }
            });

        case fromTodo.BORRAR_TODO:
            return state.filter(todo => {
                return todo.id !== action.id
            });

        case fromTodo.BORRAR_COMPLETADOS:
            return state.filter(todo => !todo.completado);

        default:
            return state;
    }
}