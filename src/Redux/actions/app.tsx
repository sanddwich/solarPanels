import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { SET_APP_ERROR, SET_APP_LOADING, SET_APP_TARIFF} from "../constants/ActionTypes";

export const sendEmail = (data: any): ThunkAction<void, RootState, null, any> => {
  return async (dispatch) => {
    try {
      dispatch(setAppLoading(true))

      const res = await fetch('https://deestore.ru/api/mail.php', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!res.ok) {
        const resData: Error = await res.json()
        setAppError(resData.message)
        throw new Error(resData.message)
      }

      const resData = await res.json()

      dispatch(setAppLoading(false))
      return resData
    } catch (err) {}
  }
}



export const setAppLoading = (loading: boolean) => ({
  type: SET_APP_LOADING,
  loading,
})

export const setAppError = (error: string) => ({
  type: SET_APP_ERROR,
  error,
})

export const setAppTariff = (tariff: string) => ({
  type: SET_APP_TARIFF,
  tariff,
})
