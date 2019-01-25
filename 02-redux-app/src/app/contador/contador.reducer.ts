import { INCREMENTAR, DECREMENTAR, MULTIPLICAR, DIVIDIR, Actions, RESET } from './contador.actions';

export function contadorReducer(state: number = 10, action: Actions) {
    switch (action.type) {
        case INCREMENTAR:
            return state + 1;
        case DECREMENTAR:
            return state - 1;
        case MULTIPLICAR:
            return state * action.payload;
        case DIVIDIR:
            return state / action.payload;
        case RESET:
            return state = 0;
        default:
            return state;
    }
}