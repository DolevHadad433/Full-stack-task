import { ColorBoxType } from "../components/App";

export default function voteBarWidth(
  colorListArr: ColorBoxType[],
  checkMostVotedCallback: (colorListArr: ColorBoxType[]) => number
) {
  const mostVoted = checkMostVotedCallback(colorListArr);
  const colorListWithWidth = colorListArr.map((color) => {
    if (mostVoted === 0) return color;
    color.width = 200 * (color.votes / mostVoted);
    return color;
  });
  return colorListWithWidth;
}
