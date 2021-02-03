import booksData from "../data/books";
import membersData from "../data/members";

const initialState = {
    books : booksData,
    members : membersData,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "HELLOOO":
            return {};
    default: return state;
    }
};

export default reducer;