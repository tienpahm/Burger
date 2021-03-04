const stateDefault = {
  burger: [
    {name: "salad", amount: 1, price: 10},
    {name: "beef", amount: 1, price: 20},
    {name: "cheese", amount: 1, price: 55},
  ],
};

const BurgerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "TANG_GIAM": {
      let updateBurger = [...state.burger];
      let index = updateBurger.findIndex((item) => item.name === action.name);
      if (index !== -1) {
        if (action.num) {
          updateBurger[index].amount += 1;
        } else {
          if (updateBurger[index].amount > 0) {
            updateBurger[index].amount -= 1;
          }
        }
      }
      console.log(updateBurger[index].amount);

      state.burger = updateBurger;
      return {...state};
    }

    default:
      return {...state};
  }
};

export default BurgerReducer;
