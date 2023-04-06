import { HeroList } from "../components";

export const MarvelPage = () => {
  const PUBLISHER = "Marvel Comics";

  return (
    <>
      <h1>{PUBLISHER}</h1>
      <hr />
      <HeroList publisher={PUBLISHER} />
    </>
  );
};
