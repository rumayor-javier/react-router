import { HeroCard } from "./HeroCard";

export const SearchResults = ({ showSearch, showError, heroes, q }) => {
  return (
    <div className="col-md-7">
      <h4>Results</h4>
      <hr />
      <div
        className="alert alert-primary animate__animated animate__fadeIn"
        style={{ display: showSearch ? "block" : "none" }}
      >
        Search a hero
      </div>
      <div
        className="alert alert-danger animate__animated animate__fadeIn"
        style={{ display: showError ? "block" : "none" }}
      >
        No hero found with <b>{q}</b>
      </div>

      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
