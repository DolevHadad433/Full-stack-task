import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ColorList from "./colorList/ColorList";
import ResetVoting from "./ResetVoting";
import { createTheme, Grid, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import voteBarWidth from "../utils/votesBarWidth";
import checkMostVoted from "../utils/mostVoted";

const breakPointsTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 655,
      md: 955,
      lg: 1255,
      xl: 1590,
    },
  },
});

export interface ColorBoxType {
  _id: string;
  name: string;
  votes: number;
  id: number;
  HEX: string;
  width: number;
}

function App() {
  const [colorList, setColorList] = useState<ColorBoxType[] | []>([]);
  const [updateColors, setUpdateColors] = useState<string>("");

  useEffect(() => {
    axios
      .get("api/colors")
      .then((response) => response.data)
      .then((json) => voteBarWidth(json, checkMostVoted))
      .then((data) => setColorList(data))
      .catch((error) => {
        throw new Error(error);
      });
  }, [updateColors]);

  async function voteHandler(color: ColorBoxType, votes: number) {
    await axios
      .put(`api/colors/${color._id}`, {
        votes,
      })
      .catch((error) => {
        throw new Error(error);
      });
    setUpdateColors(`${color.name} has ${color.votes} votes!`);
  }

  function resetVoting() {
    axios.get("api/colors/reset").catch((error) => {
      throw new Error(error);
    });
    setUpdateColors("Vote is RESET!");
  }

  return (
    <ThemeProvider theme={breakPointsTheme}>
      <Container maxWidth={"xl"}>
        <Grid container>
          <Grid item sx={{ mt: 2 }}>
            <ResetVoting resetVoting={resetVoting} />
          </Grid>
        </Grid>
      </Container>
      <h1 style={{ userSelect: "none", textAlign: "center" }}>
        Choose your favorite color!
      </h1>
      <ColorList colorList={colorList} voteHandler={voteHandler} />
    </ThemeProvider>
  );
}

export default App;
