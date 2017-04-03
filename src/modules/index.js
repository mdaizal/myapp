import React from 'react'
import{ Authentication } from './reducers/authentication'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import App from './app'

const reduxLog = createLogger()
const store = createStore(
    Authentication,
    applyMiddleware(
        reduxLog,
        thunk
    )
)

class ModuleIndex extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

export default ModuleIndex