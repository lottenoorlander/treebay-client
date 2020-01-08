export function errorHandling(error) {
  return {
    type: "ERROR",
    payload: error
  };
}

export function clearError() {
  return {
    type: "CLEAR_ERROR"
  };
}
