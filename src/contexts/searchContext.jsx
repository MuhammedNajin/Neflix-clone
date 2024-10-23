
import { createContext, useState } from "react";

export const SearchContext = createContext(null);

export default function Search(props) {
    const [ searchResult, setSearchResult ] = useState(null);
    const { children } = props;

    return (
        <div>
            <SearchContext.Provider value={{searchResult, setSearchResult}}>
                { children }
            </SearchContext.Provider>
        </div>
    )
}