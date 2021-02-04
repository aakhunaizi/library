export const ADD_MEMBER = "ADD_MEMBER";
export const ADD_BOOK = "ADD_BOOK";
export const RETURN_BOOK = "RETURN_BOOK";

export const addMember = (newMember) => ({
  type: ADD_MEMBER,
  payload: { newMember },
});

export const addBook = (newBook) => ({
  type: ADD_BOOK,
  payload: { newBook },
});

export const returnBook = (newReturn) => ({
  type: RETURN_BOOK,
  payload: { newReturn },
});
