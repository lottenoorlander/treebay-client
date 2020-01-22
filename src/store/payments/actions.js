import api from "../../api";
import { errorHandling } from "../error/actions";
var stripe = window.Stripe(process.env.STRIPE_API, {
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
