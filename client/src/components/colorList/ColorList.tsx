import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { ColorBoxType } from "../App";
import ColorBox from "./colorBox/ColorBox";

interface ColorListProps {
  colorList: ColorBoxType[];
  voteHandler: (color: ColorBoxType, votes: number) => Promise<any>;
}

function ColorList({ colorList, voteHandler }: ColorListProps) {
  return (
    <div>
      <Container maxWidth={"xl"}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={2}
          justifyContent={"start"}
          alignItems={"center"}
        >
          {colorList.map((c) => {
            return (
              <Grid key={c.id} item lg={3} md={4} sm={6} xs={12}>
                <ColorBox colorBox={c} voteHandler={voteHandler} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
export default ColorList;
