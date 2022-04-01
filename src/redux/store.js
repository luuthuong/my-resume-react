import {createStore} from 'redux'

import {composeWithDevTools} from 'redux-devtools-extension'

import reducer from './reducer'

const enhandCompose=composeWithDevTools();
const store =createStore(reducer,enhandCompose)

export default store;