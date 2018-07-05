import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from "./types";

export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};

export const deleteItem = itemId => {
  return {
    type: DELETE_ITEM,
    payload: itemId
  };
};

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};
