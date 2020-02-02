import React from 'react'
// El provider és el pont entre react i redux
import { Provider } from 'react-redux';
import Store from './redux/store';
import Routes from './routes'

const store = Store();

export default () => (
    <Provider store={store}>
        <Routes/>
    </Provider>
)

