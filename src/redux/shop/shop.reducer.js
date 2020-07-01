import SHOP_CONSTANT from './shop.constants'

const INITIAL_STATE = {
  collections: SHOP_CONSTANT
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default shopReducer;