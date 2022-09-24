import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { columnsSelector } from "../../../redux/selectors";
import { OPEN_CELL } from "../../../redux/actions";
import { arrayOfCells } from "../../../redux/selectors/index";

const CellsList = () => {
  const columns = useSelector(columnsSelector);
  const dispatch = useDispatch();
  const array = useSelector(arrayOfCells);

  return array?.map((el, index) => {
    return (
      <tr
        className={el !== "□" ? "miner-element active-cell" : "miner"}
        key={index}
        onClick={() => {
          let xPosition = index % columns;
          let yPosition = Math.floor(index / columns);
          dispatch(OPEN_CELL({ xPosition, yPosition }));
        }}
      >
        <td>
          <div className="ceil">
            <span className="font-el">{el}</span>
          </div>
        </td>
      </tr>
    );
  });
};

export default React.memo(CellsList);
