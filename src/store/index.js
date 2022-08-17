import { createStore } from "redux";

const initialState = {
  width: 150,
  height: 50,
  bgColor: 'fff',
  txtColor: '000',
  text: 'ボタン',
  border: 2,
  borderColor: '000',
  radius: 5
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WIDTH_CHANGE':
      return {
        ...state,
        width: action.payload
      }
    case 'HEIGHT_CHANGE':
      return {
        ...state,
        height: action.payload
      }
    case 'BG_COLOR_CHANGE':
      return {
        ...state,
        bgColor: action.payload
      }
    case 'TXT_COLOR_CHANGE':
      return {
        ...state,
        txtColor: action.payload
      }
    case 'TEXT_CHANGE':
      return {
        ...state,
        text: action.payload
      }
    case 'BORDER_CHANGE':
      return {
        ...state,
        border: action.payload
      }
    case 'BORDER_COLOR_CHANGE':
      return {
        ...state,
        borderColor: action.payload
      }
    case 'RADIUS_CHANGE':
      return {
        ...state,
        radius: action.payload
      }
    default:
        return state
  }
};

const store = createStore(reducer);

export default store;