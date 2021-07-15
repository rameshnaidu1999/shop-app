export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      /* logic for adding items to cart */

      return { ...state, basket: [...state.basket, action.item] };
      break;

    case "REMOVE_FROM_BASKET":
      /* logic to remove items from cart */

      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove (id: ${action.id})`);
      }
      return { ...state, basket: newBasket };
      break;

    default:
      return state;
  }
}
export default reducer;
