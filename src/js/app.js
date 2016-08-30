import { combineReducers, createStore } from 'redux'
import Immutable from 'immutable'

require('../css/app.css')

const C = {
    main: {
        set_modifier: 'main.set-modifier'
    }
}

let main = (state, action) => {
    state = state || Immutable.Map({ modifier: '' })

    if (action.type !== C.main.set_modifier) {
        return state
    }

    return state.set('modifier', action.modifier)
}

let store = createStore(combineReducers({ main }))


store.subscribe(() => {
    let state = store.getState()
    let mainEl = document.getElementById('main')

    mainEl.className = 'main main--' + state.main.get('modifier');
})

setInterval(() => {
    let state = store.getState()

    switch (state.main.get('modifier')) {
        case 'light':
            store.dispatch({ type: C.main.set_modifier, modifier: 'dark' })
            break
        case 'dark':
            store.dispatch({ type: C.main.set_modifier, modifier: '' })
            break
        default:
            store.dispatch({ type: C.main.set_modifier, modifier: 'light' })
    }

}, 1000)

// window.store = store
