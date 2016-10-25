import * as constants from '../constants/media'

export const ban = mediaId => ({ type: constants.BANNED, payload: { mediaId } })
export const approve = mediaId => ({ type: constants.APPROVED, payload: { mediaId } })
