import {
  HIDE_REQUESTFORM_MODAL,
  HIDE_THANKS_MODAL,
  SET_MOBILEMENU_MODAL,
  SET_POPUP_PRICE_DESCRIPTION_MODAL,
  SET_SHOWPAYMENT_MODAL,
  SHOW_REQUESTFORM_MODAL,
  SHOW_THANKS_MODAL,
} from '../constants/ActionTypes'
import { ModalState } from '../interfaces/interfaces'
import { ModalActionType } from '../interfaces/modal'

const initialState: ModalState = {
  modalRequestForm: {
    isActive: false,
  },
  modalPayment: {
    isActive: false,
  },
  mobileMenu: {
    isActive: false,
  },
  thanksModal: {
    isActive: false,
  },
  PopupPriceDescription: {
    isActive: false,
  },
}

const modal = (state: ModalState = initialState, action: ModalActionType) => {
  switch (action.type) {
    case SHOW_REQUESTFORM_MODAL:
      return {
        ...state,
        modalRequestForm: {
          isActive: true,
        },
      }

    case SHOW_THANKS_MODAL:
      return {
        ...state,
        thanksModal: {
          isActive: true,
        },
      }
    case HIDE_THANKS_MODAL:
      return {
        ...state,
        thanksModal: {
          isActive: false,
        },
      }
    case HIDE_REQUESTFORM_MODAL:
      return {
        ...state,
        modalRequestForm: {
          isActive: false,
        },
      }
    case SET_SHOWPAYMENT_MODAL:
      return {
        ...state,
        modalPayment: {
          isActive: action.isActive,
        },
      }
    case SET_MOBILEMENU_MODAL:
      return {
        ...state,
        mobileMenu: {
          isActive: action.isActive,
        },
      }
    case SET_POPUP_PRICE_DESCRIPTION_MODAL:
      return {
        ...state,
        PopupPriceDescription: {
          isActive: action.isActive,
        },
      }
    default:
      return state
  }
}

export default modal
