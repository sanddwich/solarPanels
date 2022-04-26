import {
  HIDE_REQUESTFORM_MODAL,
  HIDE_THANKS_MODAL,
  SET_MOBILEMENU_MODAL,
  SET_POPUP_PRICE_DESCRIPTION_MODAL,
  SET_SHOWPAYMENT_MODAL,
  SHOW_REQUESTFORM_MODAL,
  SHOW_THANKS_MODAL,
} from '../constants/ActionTypes'

interface showRequestModal {
  type: typeof SHOW_REQUESTFORM_MODAL
}

interface hideRequestModal {
  type: typeof HIDE_REQUESTFORM_MODAL
}

interface showThanksModal {
  type: typeof SHOW_THANKS_MODAL
}

interface hideThanksModal {
  type: typeof HIDE_THANKS_MODAL
}

interface setShowPaymentModal {
  type: typeof SET_SHOWPAYMENT_MODAL
  isActive: boolean
}

interface setMobileMenuModal {
  type: typeof SET_MOBILEMENU_MODAL
  isActive: boolean
}

interface setPopupPriceDescription {
  type: typeof SET_POPUP_PRICE_DESCRIPTION_MODAL
  isActive: boolean
}

export type ModalActionType =
  | showRequestModal
  | hideRequestModal
  | setShowPaymentModal
  | setMobileMenuModal
  | showThanksModal
  | hideThanksModal
  | setPopupPriceDescription
