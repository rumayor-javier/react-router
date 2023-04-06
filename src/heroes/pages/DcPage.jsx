import { HeroList } from "../components";

export const DcPage = () => {
  const PUBLISHER = "DC Comics";

  return (
    <>
      <h1>{PUBLISHER}</h1>
      <hr />
      <HeroList publisher={PUBLISHER} />
    </>
  );
};
