import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  mainContainer: {
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  headerContainer: {
    display: "flex",
    margin: "50px auto 20px auto",
  },
  active: {
    border: "3px solid rgba(25, 118, 210, 0.5) !important",
  },
  notActive: {
    border: "1px solid rgba(25, 118, 210, 0.5) !important",
  },
});
