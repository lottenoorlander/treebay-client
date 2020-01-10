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

export function getTreeDetails(treeId) {
  return (dispatch, getState) => {
    api(`/tree/${treeId}`)
      .then(tree => dispatch(fetchedOneTreeDetails(tree)))
      .catch(error => dispatch(errorHandling(error)));
  };
}

function fetchedOneTreeDetails(tree) {
  return {
    type: "ONE_TREE",
    payload: tree
  };
}
