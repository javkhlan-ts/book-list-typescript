import axios from "axios";

export const searchAPI = async (searchKeyword: string, currentPage: number, itemsPerPage: number = 20) => {
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchKeyword}&startIndex=${currentPage-1}&maxResults=${itemsPerPage}`)
    return res;
};