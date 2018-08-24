export default function(state = {}, action) {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        email: action.user.email,
        name: action.user.name,
        lastname: action.user.lastname
      };
    case "DELETE_USER":
      return {
        ...state,
        email: undefined,
        name: undefined,
        lastname: undefined
      };

    default:
      return state;
  }
}
