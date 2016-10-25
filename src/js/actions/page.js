import * as constants from '../constants/page'

export const changeMainClass = className => ({type: constants.MAIN_CLASS_CHANGED, payload: { className }})
