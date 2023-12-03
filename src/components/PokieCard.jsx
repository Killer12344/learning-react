import React from "react";
import { Link } from "react-router-dom";

const PokieCard = ({ img, title, path }) => {
  return (
    <div className="max-w-sm">
      <Link
        to={`/pokies/${title}`}
        state={{ api: path }}
        className="mb-[-30px] block"
      >
        <img className="h-36 max-w-full object-cover" src={img} alt="" />
      </Link>
      <div className="p-5 pt-10 shadow shadow-purple-200 bg-white rounded-lg">
        <a href="#">
          <h5 className="uppercase mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
      </div>
    </div>
  );
};

export default PokieCard;
