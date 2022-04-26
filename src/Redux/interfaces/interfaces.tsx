export interface AppState {
  loading: boolean
  error: string
  tariff: string
}

export interface ToastState {
  isActive: boolean
  message: string
  error: boolean
}

export interface ModalState {
  modalRequestForm: {
    isActive: boolean
  }
  modalPayment: {
    isActive: boolean
  }
  mobileMenu: {
    isActive: boolean
  }
  thanksModal: {
    isActive: boolean
  }
  PopupPriceDescription: {
    isActive: boolean
  }
}
