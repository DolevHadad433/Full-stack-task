import React from "react";
import { ColorBoxType } from "../../App";
import { Card, Typography, Grid } from "@mui/material";

interface ColorBoxProps {
  colorBox: ColorBoxType;
  voteHandler: (color: ColorBoxType, votes: number) => Promise<any>;
}

function ColorBox({ colorBox, voteHandler }: ColorBoxProps) {
  return (
    <div>
      <Card
        onClick={() => {
          voteHandler(colorBox, colorBox.votes + 1);
        }}
        sx={{
          width: 300,
          height: 300,
          bgcolor: colorBox.HEX,
        }}
      >
        <Grid
          container
          alignItems="center"
          sx={{ width: "100%", height: "100%" }}
        >
          <Grid
            item
            xs={12}
            sx={{
              userSelect: "none",
              textAlign: "center",
            }}
          >
            <Typography variant="h2" sx={{ color: "#000000" }}>
              {colorBox.name}
            </Typography>

            <Typography variant="h6" sx={{ color: "#000000" }}>
              Click to vote!
            </Typography>

            {colorBox.votes === 0 ? (
              <Typography
                variant="body1"
                sx={{ color: "#000000", fontWeight: "bold" }}
              >
                Nobody voted to {colorBox.name} yet! 😔
                <br />
                Did you will be the first one?
              </Typography>
            ) : null}
          </Grid>
          <Grid item xs={12} alignSelf="flex-end">
            <div
              style={{
                background: "#349eeb",
                width: colorBox.width,
                userSelect: "none",
              }}
            >
              {colorBox.votes > 0 ? colorBox.votes : null}
            </div>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
export default ColorBox;
