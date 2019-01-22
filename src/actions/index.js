export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

export function addNewMessage({ message }) {
  return {
  type: ADD_NEW_MESSAGE,
  ...message
  }
}