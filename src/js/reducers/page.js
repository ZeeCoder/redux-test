import * as constants from '../constants/page'

const initialState = {
    className: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.MAIN_CLASS_TOGGLED:
            return { ...state, className: (state.className === 'light' ? 'dark' : 'light') }
        default:
            return state
    }
}
