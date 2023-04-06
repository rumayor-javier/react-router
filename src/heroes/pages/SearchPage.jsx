import { useSearch } from "../../hooks";
import { SearchResults, SearchForm } from "../components";

export const SearchPage = () => {
  const {
    searchText,
    onInputChange,
    onSubmitSearch,
    showSearch,
    showError,
    heroes,
    q,
  } = useSearch();

  return (
    <div className="row mt-3">
      <SearchForm
        onSubmitSearch={onSubmitSearch}
        searchText={searchText}
        onInputChange={onInputChange}
      />
      <SearchResults
        showSearch={showSearch}
        showError={showError}
        heroes={heroes}
        q={q}
      />
    </div>
  );
};
