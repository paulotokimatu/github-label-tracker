import AlertType from 'core/models/AlertType';

export const SET_ALERT = 'SET_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

export const setAlert = (text: string, type: AlertType) => (
  {
    payload: {
      text,
      type,
    },
    type: SET_ALERT,
  }
);

export const hideAlert = () => (
  {
    type: HIDE_ALERT,
  }
);
