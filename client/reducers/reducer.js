import { combineReducers } from 'redux';

import Utils from '../utils/utils';

const items = (state=[], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [{
        id: require('uuid/v4')(),
        createTimestamp: Utils.formatDate(new Date())
      }, ...state];

    case 'REMOVE_ITEM':
      return state.filter(item => item.id != action.id);

    case 'EDIT_ITEM_NAME':
      const idxToEditName = state.findIndex(item => item.id == action.id);
      state[idxToEditName].name = action.name;
      return [...state];

    default:
      return state;
  }
};

const reducer = combineReducers({ items });

export default reducer;