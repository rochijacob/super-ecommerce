import Commerce from "@chec/commerce.js";

//en newCommerce(PK)
export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
);
