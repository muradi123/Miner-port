import React from "react";
import { useSelector } from "react-redux";
import CellsList from "./CellList";
import { columnsSelector } from "../../redux/selectors";

const Miner = () => {
  const columns = useSelector(columnsSelector);
  return (
    <table className='main-table'>
      <tbody className={`table-container${columns}`}>
        <CellsList />
      </tbody>
    </table>
  );
};

export default Miner;
