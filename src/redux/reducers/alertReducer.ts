import AlertType from 'core/models/AlertType';
import {
  HIDE_ALERT,
  SET_ALERT,
} from '../actions/alertActions';

const initialState: {
  type: AlertType,
  text: string,
  isOn: boolean,
} = {
  isOn: false,
  text: '',
  type: 'info',
};

const alertReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_ALERT: {
      const {text, type} = action.payload;
      return {
        isOn: true,
        text,
        type,
      };
    }
    case HIDE_ALERT: {
      return {
        isOn: false,
        text: '',
        type: 'info',
      };
    }
    default: {
      return state;
    }
  }
};

export default alertReducer;
