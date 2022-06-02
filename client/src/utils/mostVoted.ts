import { ColorBoxType } from "../components/App";

export default function checkMostVoted(colorListArr: ColorBoxType[]): number {
  let mostVoted = 0;
  colorListArr.forEach((c) => {
    if (c.votes >= mostVoted) {
      mostVoted = c.votes;
    }
  });
  return mostVoted;
}
