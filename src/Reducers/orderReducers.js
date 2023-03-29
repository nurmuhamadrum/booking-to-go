const initialState = {
  orders: [
    {
      'gender': 'Mr',
      'name': 'Nur Muhamad Rum'
    },
    {
      'gender': 'Ms',
      'name': 'Agnelisa Amallia'
    }
  ]
}

const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      return {
        ...state,
        orders: payload
      }
    case "DEL":
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== payload)
      }
    default:
      return {
        ...state
      }
  }
}
export default orderReducer;