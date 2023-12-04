import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import usePagination from '../../hooks/usePagination';
import Card from '../../components/card/Card';
import Grid from '../../components/grid/Grid.styled';
import scrollTop from '../../utilits/scrollTop';

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    const params = useParams();
    const [currentItems, currentPage, pageCount, handlePageClick, setItemOffset, setCurrentPage] = usePagination(cuisine, 9);

    const getCusine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=100`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCusine(params.type);
        setItemOffset(0);
        setCurrentPage(0);
        scrollTop();

    }, [params.type, setItemOffset, setCurrentPage])

    return (
        <section className='cuisine'>
            <div className='container'>
                <Grid>
                    {currentItems.length ?
                        currentItems.map((item) => (
                            <Card key={item.id} item={item} />
                        )) : (
                            false
                        )
                    }
                </Grid>
                {pageCount > 1 ? (
                    <ReactPaginate
                        className="pagination"
                        breakLabel="..."
                        nextLabel="next >"
                        previousLabel="< previous"
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
        </section>
    )
}

export default Cuisine;
