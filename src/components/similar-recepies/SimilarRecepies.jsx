import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import usePagination from '../../hooks/usePagination';
import Card from '../card/Card';
import Grid from '../grid/Grid.styled';

function SimilarRecepies({ recepieId }) {
    const [recepies, setRecepies] = useState([]);
    const [currentItems, currentPage, pageCount, handlePageClick] = usePagination(recepies, 9);

    const fetchRecepies = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${recepieId}/similar?apiKey=${process.env.REACT_APP_API_KEY}&number=27`);
        const recepiesData = await data.json();

        if (recepiesData.length) {
            const recepiesDataWithImage = recepiesData.map((recepie) => {
                return {
                    ...recepie,
                    image: `https://spoonacular.com/recipeImages/${recepie.id}-556x370.${recepie.imageType}`,
                }
            })

            setRecepies(recepiesDataWithImage);
        }
    };

    return (
        <>
            {recepies.length ? (
                <>
                    <h3>Similar Recepies</h3>
                    <Grid>
                        {currentItems.map((recepie) => (
                            <Card key={recepie.id} item={recepie} onClick={() => { console.log('clicked') }} />
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
                </>
            ) : (
                <button className='btn btn-similar' onClick={fetchRecepies}>Show Similar Recepies</button>
            )
            }
        </>
    )
}

export default SimilarRecepies
