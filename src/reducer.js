export const initialState = {
  cart: [],
  user: null,
};

// Selector
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => amount + item.price, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload
      );

      let newCart = [...state.cart];

      if (index >= 0) {
        //item exist in the Cart Just Remove it
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't Remove Product(id: ${action.payload}) as It's Not in the Cart`
        );
      }
      return {
        ...state,
        cart: newCart,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
