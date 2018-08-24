export const changeFlash = text => ({
  type: "CHANGE_FLASH",
  text
});
export const closeFlash = () => ({
  type: "CLOSE_FLASH"
});
export const createSession = token => ({
  type: "CREATE_SESSION",
  token
});
export const deleteSession = () => ({
  type: "DELETE_SESSION"
});

export const updateUser = user => ({
  type: "UPDATE_USER",
  user
});
export const deleteUser = () => ({
  type: "DELETE_USER"
});
