export function errorHandling(error) {
  return {
    type: "ERROR",
    payload: error
  };
}
