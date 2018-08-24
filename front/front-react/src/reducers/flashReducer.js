export default function(state = {}, action) {
  switch (action.type) {
    case "CHANGE_FLASH":
      return { ...state, message: action.text, open: true };
    case "CLOSE_FLASH":
      return { ...state, message: undefined, open: false };
    default:
      return state;
  }
}
