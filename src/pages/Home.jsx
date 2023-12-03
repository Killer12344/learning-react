import React, { useState } from "react";
import useFetchData from "../useFetchData";
import PokieCard from "../components/PokieCard";

function Home() {
  const [uri, setUri] = useState("https://pokeapi.co/api/v2/pokemon");

  const { data: pokes, pending } = useFetchData(uri);

  return (
    <div>
      {pending ? (
        "Loading..."
      ) : (
        <>
          <div className="grid grid-cols-6 gap-5 mb-5">
            {pokes.results.map((element, index) => (
              <PokieCard
                key={index}
                img={`https://img.pokemondb.net/artwork/large/${element.name}.jpg`}
                title={element.name}
                path={element.url}
              />
            ))}
          </div>

          <div className="mb-3 text-end">
            <button
              className={`w-36 rounded-sm py-2 me-3 ${
                pokes.previous ? "bg-purple-500" : "bg-slate-300"
              }`}
              onClick={() => setUri(pokes.previous)}
              disabled={!pokes.previous}
            >
              Previous
            </button>
            <button
              className={`w-36 rounded-sm py-2 me-3 ${
                pokes.next ? "bg-purple-500" : "bg-slate-400"
              }`}
              onClick={() => setUri(pokes.next)}
              disabled={!pokes.next}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
