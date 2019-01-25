import { Store, createStore } from 'redux';
import { reducer } from './contador/contador.reducer';
import { incrementadorAction, multiplicarAction, dividirAction } from './contador/contador.actions';

const store: Store = createStore(reducer);

store.subscribe(() => {
    console.log('Subs:', store.getState());
});

store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(multiplicarAction);
store.dispatch(multiplicarAction);
store.dispatch(dividirAction);
