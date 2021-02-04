import slugify from "slugify";

// Data
import booksData from "../data/books";
import membersData from "../data/members";

const initialState = {
    books : booksData,
    members : membersData,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_MEMBER":
            const {newMember} = action.payload;
            const fullName = [newMember["firstName"], newMember["lastName"]];
            newMember.id = state.members[state.members.length - 1].id++;
            newMember.currentlyBorrowedBooks = [];
            newMember.requestedBooks = [];
            newMember.slug = slugify(fullName.join(" "), {lower: true})
            newMember.membership = newMember.membership.toLowerCase();
            return {
                ...state, 
                members: [...state.members, newMember]
            };
        case "ADD_BOOK":
            const {newBook} = action.payload;
            newBook.id = state.books[state.books.length - 1].id++;
            newBook.genre = newBook.genre.split(",");
            newBook.available = true;
            newBook.borrowedBy = [];
            newBook.slug = slugify(newBook.title, {lower: true})
            return {
                ...state, 
                books: [...state.books, newBook]
            };
    default: return state;
    }
};

export default reducer;