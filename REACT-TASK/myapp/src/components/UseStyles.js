import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    userForm: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

export default UseStyles
