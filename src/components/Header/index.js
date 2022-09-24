import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useStyles } from "./HeaderStyles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_ACTIVE } from "../../redux/actions";
import { CREATE_NEW_TABLE } from "../../redux/actions";
import { isGameFinishedSelector, levelSelector } from "../../redux/selectors";

const Header = () => {
  const [buttons, setButtons] = useState([
    {
      level: "easy",
    },
    {
      level: "normal",
    },
    {
      level: "hard",
    },
    {
      level: "hardest",
    },
  ]);
  const isGameFinished = useSelector(isGameFinishedSelector);
  const [visible, setVisible] = useState(false);
  const level = useSelector(levelSelector);
  const dispatch = useDispatch();
  const styles = useStyles();

  const clickHandler = (index) => {
    setVisible(true);
    setButtons((prev) =>
      prev.map((state, id) => {
        if (id !== index) {
          return { ...state, active: false };
        } else {
          return { ...state, active: true };
        }
      })
    );
    dispatch(CHANGE_ACTIVE(index));
  };

  return (
    <Container className={styles.mainContainer} maxWidth='sm'>
      <Box>
        <Stack className={styles.headerContainer} spacing={2} direction='row'>
          {buttons.map((button, index) => {
            return (
              <Button
                key={index}
                onClick={() => {
                  clickHandler(index);
                }}
                className={button.active ? styles.active : styles.notActive}
                variant='outlined'
              >
                {button.level}
              </Button>
            );
          })}
        </Stack>
      </Box>
      <Box>
        <Button
          onClick={() => {
            dispatch(CREATE_NEW_TABLE(level));
          }}
          disabled={visible ? false : true}
          variant='outlined'
        >
          {isGameFinished ? "play game" : "play again"}
        </Button>
      </Box>
    </Container>
  );
};

export default Header;
