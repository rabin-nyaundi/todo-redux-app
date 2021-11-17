import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './App';
import { configureStore } from './store/store';
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore()
const persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate
            persistor = {persistor}
            loading = {<div>Loading...</div>}
        >
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);