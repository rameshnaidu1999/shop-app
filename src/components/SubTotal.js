import React from "react";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";

function SubTotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="container-sm">
      <div className="m-5">
        <h4>Subtotal: {basket.length} </h4>

        <CurrencyFormat
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    </div>
  );
}

export default SubTotal;
