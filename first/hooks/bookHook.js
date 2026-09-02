import { useContext } from "react";
import { BookContext } from "../context/bookContext";

const useBook = () => {
    const bookContext = useContext(BookContext);

    if (!bookContext) {
        throw new Error("Unable to locate book context. Ensure BookProvider wraps the app.");
    }

    return bookContext;
};

export default useBook;