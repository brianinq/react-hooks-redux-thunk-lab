import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CatList from "./CatList";
import { fetchCats } from "./catsSlice";

function Cats() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCats());
  }, []);
  const cats = useSelector((state) => state.entities);
  const status = useSelector((state) => state.status);
  console.log(cats);
  return (
    <div>
      <h1>CatBook</h1>
      {status === "loading" ? "Loading..." : <CatList cats={cats} />}
    </div>
  );
}

export default Cats;
