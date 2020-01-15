import api from "../../api";
import { errorHandling } from "../error/actions";
var stripe = window.Stripe("pk_test_5GgrLOlI0oopZXeMO6nNbpDp00GkzGAiT1", {
  stripeAccount: "acct_1G0BSqCVyUaTyDOU"
});

export function getCheckout(treeId) {
  return (dispatch, getState) => {
    const jwt = getState().auth.jwt;
    api("/checkout", {
      method: "POST",
      body: { id: treeId },
      jwt: jwt
    })
      .then(session =>
        stripe
          .redirectToCheckout({
            sessionId: session.id
          })
          .then(function(result) {})
      )
      .catch(error => {
        dispatch(errorHandling(error));
      });
  };
}
