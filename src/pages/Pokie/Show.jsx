import React from "react";
import { useLocation, useParams } from "react-router-dom";
import useFetchData from "../../useFetchData";

const Show = () => {
  const { state } = useLocation();
  const { data: pokie, pending } = useFetchData(state.api);
  console.log(pokie);
  return (
    <div>
      <div>
        <img src={pokie.sprites?.back_default} alt="" />
      </div>
    </div>
  );
};

export default Show;
