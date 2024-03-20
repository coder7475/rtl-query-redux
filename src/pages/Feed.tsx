import { useGetPokemonByNameQuery } from "../redux/features/api/baseApi";

const Feed = () => {
  const {
    data: pokeData,
    isLoading,
    // isError,
    error,
  } = useGetPokemonByNameQuery("bulbasaur");

  return (
    <main>
      <h1 className="text-5xl">Pokemon Data</h1>
      {error ? (
        <>Ho no, their is no data for bulbasaur</>
      ) : isLoading ? (
        <>Loading...</>
      ) : pokeData ? (
        <>
          <h3>{pokeData?.species?.name}</h3>
          <img src={pokeData.sprites.front_shiny} alt={pokeData.species.name} />
        </>
      ) : null}
    </main>
  );
};

export default Feed;
