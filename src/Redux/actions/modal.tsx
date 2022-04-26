import {
  HIDE_REQUESTFORM_MODAL,
  HIDE_THANKS_MODAL,
  SET_MOBILEMENU_MODAL,
  SET_POPUP_PRICE_DESCRIPTION_MODAL,
  SET_SHOWPAYMENT_MODAL,
  SHOW_REQUESTFORM_MODAL,
  SHOW_THANKS_MODAL,
} from '../constants/ActionTypes'

export const showRequestModal = () => ({
  type: SHOW_REQUESTFORM_MODAL,
})

export const hideRequestModal = () => ({
  type: HIDE_REQUESTFORM_MODAL,
})

export const showThanksModal = () => ({
  type: SHOW_THANKS_MODAL,
})

export const hideThanksModal = () => ({
  type: HIDE_THANKS_MODAL,
})

export const setShowPaymentModal = (isActive: boolean) => ({
  type: SET_SHOWPAYMENT_MODAL,
  isActive,
})

export const setMobileMenuModal = (isActive: boolean) => ({
  type: SET_MOBILEMENU_MODAL,
  isActive,
})

export const setPopupPriceDescription = (isActive: boolean) => ({
  type: SET_POPUP_PRICE_DESCRIPTION_MODAL,
  isActive,
})
