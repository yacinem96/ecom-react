
const inistialState = {
    cart: []
}



const CartReducer = (state = inistialState, action) => {
    const { type, payload } = action;


    switch (type) {
        case "ADDCART":
            console.log("payloadid = " + payload.id);
            console.log("cart= " + state.cart);

            const exist = state.cart.find((item) => {
                return item.id === payload.id
            })

            if (exist) {
                
                console.log("if exist");
                return {
                    ...state,
                    cart: state.cart.map((item) => {
                        if (item.id === payload.id) {
                            item.qte++
                        } return item
                    })
                }
            }

            return { ...state, cart: [...state.cart, payload] };

        case "DELETECART":
            return {
                ...state, cart: state.cart.filter((item) => {
                    return item.id !== payload
                })
            }
        default:
            return state;
    }

}



export default CartReducer;