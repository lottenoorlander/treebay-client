import api from "../../api";
import { errorHandling } from "../error/actions";

export function getTrees() {
  return (dispatch, getState) => {
    api("/trees")
      .then(trees => dispatch(fetchedTrees(trees)))
      .catch(error => dispatch(errorHandling(error)));
  };
}

function fetchedTrees(trees) {
  return {
    type: "ALL_TREES",
    payload: trees
  };
}
