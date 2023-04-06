export const SearchForm = ({ onSubmitSearch, searchText, onInputChange }) => {
  return (
    <>
      <div className="col-md-5">
        <h4>Searching</h4>
        <hr />
        <form onSubmit={onSubmitSearch}>
          <input
            type="text"
            placeholder="Find your hero"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}
          />
          <button
            type="submit"
            className="btn m-1 btn-block btn-outline-primary"
          >
            Search...
          </button>
        </form>
      </div>
    </>
  );
};
