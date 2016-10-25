import { createStore } from 'redux'
import reducer from './reducers'
import * as pageActions from './actions/page'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

require('../css/app.css')

store.subscribe(() => {
    let state = store.getState()
    let mainEl = document.getElementById('main')

    mainEl.className = 'main main--' + state.page.className
})

document.getElementById('toggleBgButton').addEventListener('click', function () {
    let state = store.getState()

    switch (state.page.className) {
        case 'light':
            store.dispatch(pageActions.changeMainClass('dark'))
            break
        case 'dark':
            store.dispatch(pageActions.changeMainClass(''))
            break
        default:
            store.dispatch(pageActions.changeMainClass('light'))
    }
});
