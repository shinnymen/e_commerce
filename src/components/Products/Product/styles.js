import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    
  },
  media: {
    height: "60vh",
    paddingTop: "",
    marginTop: "2vh",
     //16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));