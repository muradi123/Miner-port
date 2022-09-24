import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RUN_GAME } from "./redux/actions";
import Miner from "./components/Miner";
import Header from "./components/Header";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(RUN_GAME());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Miner />
    </div>
  );
};

export default App;
