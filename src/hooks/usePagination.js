import { useState } from 'react'

export default function usePagination(items = [], perPage) {
    const [itemOffset, setItemOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const endOffset = itemOffset + perPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / perPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * perPage) % items.length;
        setItemOffset(newOffset);
        setCurrentPage(event.selected);
    };

    return [currentItems, currentPage, pageCount, handlePageClick, setItemOffset, setCurrentPage];
}
