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

export function addTree(treeDetails, history) {
  return (dispatch, getState) => {
    const jwt = getState().auth.jwt;
    api(`/trees`, {
      method: "POST",
      body: treeDetails,
      jwt: jwt
    })
      .then(tree => history.push(`/trees/${tree.id}`))
      .catch(error => dispatch(errorHandling(error)));
  };
}

export function getMyTrees() {
  return (dispatch, getState) => {
    const jwt = getState().auth.jwt;
    api("/trees/bought", {
      method: "GET",
      jwt: jwt
    })
      .then(myTrees => {
        dispatch(treesBought(myTrees));
      })
      .catch(error => {
        dispatch(errorHandling(error));
      });
  };
}

export function treesBought(myTrees) {
  return {
    type: "MY_TREES",
    payload: myTrees
  };
}
