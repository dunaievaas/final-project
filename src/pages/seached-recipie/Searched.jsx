import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Grid from '../../components/grid/Grid.styled';
import Card from '../../components/card/Card';
import usePagination from '../../hooks/usePagination';
import styled from 'styled-components';

function Searched() {
    const [searchedRecepies, setSearchedRecepies] = useState([]);
    let params = useParams();
    const [currentItems, currentPage, pageCount, handlePageClick, setItemOffset, setCurrentPage] = usePagination(searchedRecepies, 9);

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=100`);
        const recipes = await data.json();
        setSearchedRecepies(recipes.results || []);
    };

    useEffect(() => {
        getSearched(params.search);
        setItemOffset(0);
        setCurrentPage(0);
    }, [params.search, setItemOffset, setCurrentPage]);

    return currentItems.length ? (
        <div className='container'>
            <Grid>
                {currentItems.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </Grid>
            {pageCount > 1 ? (
                <ReactPaginate
                    className="pagination"
                    breakLabel="..."
                    nextLabel=">"
                    previousLabel="<"
                    onPageChange={handlePageClick}
                    pageCount={pageCount}
                    forcePage={currentPage}
                    pageRangeDisplayed={2}
                    renderOnZeroPageCount={null}
                />
            ) : (
                false
            )}
        </div>
    ) : (
        <ErrorText>Nothing found by your search.</ErrorText>
    )
};

const ErrorText = styled.p`
    text-align: center;
`

export default Searched;
