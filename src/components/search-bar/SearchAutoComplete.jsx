import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Autocomplete, TextField } from "@mui/material";

function SearchAutoComplete({ className = '' }) {
    const navigate = useNavigate();
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const getSearched = async (name) => {
            const data = await fetch(`https://api.spoonacular.com/recipes/autocomplete?apiKey=${process.env.REACT_APP_API_KEY}&number=10&query=${inputValue}`);
            const recipes = await data.json();
            setOptions(getOptions(recipes));
        };

        getSearched()
    }, [inputValue]);

    function getOptions(data) {
        const optiopns = [];

        if (data && Array.isArray(data)) {
            for (const option of data) {
                optiopns.push({
                    value: option.id,
                    label: option.title,
                });
            }
        }

        return optiopns;
    }

    return (
        <Autocomplete
            className={['search-autocomplete', className].join(' ')}
            autoComplete
            includeInputInList
            noOptionsText="Try type something..."
            options={options}
            value={value}
            isOptionEqualToValue={(option, value) => option.value === value.value}
            getOptionLabel={(option) => option.label}
            onChange={(event, newValue) => {
                setValue(newValue);
                if (newValue && newValue.label) {
                    navigate('searched/' + newValue.label);
                }
            }}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            onKeyDown={(event) => {
                if (event.key === 'Enter') {
                    event.defaultMuiPrevented = true;
                    navigate('searched/' + inputValue);
                }
            }}
            renderInput={(params) => (
                <TextField {...params} label="Search" fullWidth />
            )}
        />
    )
};

export default SearchAutoComplete;
