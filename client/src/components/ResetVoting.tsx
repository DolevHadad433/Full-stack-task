import { Button } from "@mui/material";
import React from "react";

interface ResetVotingProps {
  resetVoting: () => void;
}

const ResetVoting: React.FC<ResetVotingProps> = ({ resetVoting }) => {
  return (
    <Button variant="contained" onClick={resetVoting}>
      Admin? Reset the voting!
    </Button>
  );
};
export default ResetVoting;
