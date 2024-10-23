import { useState, useContext, useCallback } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import SearchResult from "./components/searchResult/SearchResult";
import RowPost from "./components/RowPost/RowPost";
import Trailer from "./components/Trialer/Trailer";
import {
  Discover_URL,
  Action_URL,
  Comedy_URL,
  Documentries_URL,
} from "./constant/Constant";
import { useTrailer } from "./Hooks/TrailerHook";
import Search, { SearchContext } from "./contexts/searchContext";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);
  const [trailerUrl, setUrl] = useTrailer();
  const [result, setResult] = useState([]);
  const { searchResult } = useContext(SearchContext);

  const handleSetUrl = useCallback(() => {
         
  }, [count]);

  return (
    <div className="app">
      <Navbar setResult={setResult} />
      {searchResult == null ? (
        <main>
          <Banner />
          <RowPost
            title="Neflix Orginals"
            subUrl={Discover_URL}
            setUrl={setUrl}
          />
          <RowPost title="Action" small subUrl={Action_URL} setUrl={setUrl} />
          <RowPost title="Comedy" small subUrl={Comedy_URL} setUrl={setUrl} />
          <RowPost
            title="Documentries"
            small
            subUrl={Documentries_URL}
            setUrl={setUrl}
          />
        </main>
      ) : (
        <SearchResult searchResults={searchResult} />
      )}

      {trailerUrl.key ? (
        <Trailer videoId={trailerUrl.key} setUrl={setUrl} />
      ) : null}
    </div>
  );
}

export default App;
