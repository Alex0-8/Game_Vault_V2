import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "../../redux/slices/gameSlice";
import { IconButton, Input, SearchContainer, SearchWrapper, SubmitButton } from "./styles";

const SearchBar = () => {
    const [query, setQuery] = useState("")
    const [searchBarVisible, setSearchBarVisible] = useState(false)
    const dispatch = useDispatch();

    const toggleSearch = () => { // funcion para alternar la barra de busqueda entre visible e invisible
        setSearchBarVisible((prev) => !prev)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearchResults(query));
    };

    return (
        <SearchWrapper>
            <IconButton onClick={toggleSearch}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </IconButton>

        <SearchContainer onSubmit={handleSearch} $visible={searchBarVisible}>
                <Input 
                    type="text"
                    value={query}
                    placeholder="Buscar juegos"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <SubmitButton type="submit"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></SubmitButton>
        </SearchContainer>
        </SearchWrapper>
    )
}

export default SearchBar;