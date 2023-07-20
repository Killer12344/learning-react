import { useEffect, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

function About () {

  const [query, setQuery] = useSearchParams();

  const { state, pathname } = useLocation();

  const formRef = useRef();

  const handelSearch = () => {
    setQuery({ name: formRef.current[0].value });
  }

  useEffect(() => {
    if (query.has('name')) {
      console.log(query.get("name"));
    }
  }, [query]);

  console.log(pathname);

  return (
    <div>
      <form ref={formRef}>
        <div className="mb-3">
          <input ref={formRef} type="text" className="form-control w-1/2" />
        </div>
      </form>
      <button onClick={handelSearch} className="btn-blue"> Search </button>
    </div>
  );
}

export default About;
