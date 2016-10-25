import * as constants from '../constants/page'

const initialState = {
    class: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.MAIN_CLASS_CHANGED:
            return { ...state, className: action.payload.className }
        default:
            return state
    }
}
