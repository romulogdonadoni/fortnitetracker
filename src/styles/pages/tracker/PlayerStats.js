import { styled } from "..";

export const PlayerStats = styled("div", {
  ".ProgressRoot": {
    position: "relative",
    overflow: "hidden",
    background: "$purple200",
    width: "300px",
    height: "24px",

    transform: "translateZ(0)",
  },

  ".ProgressIndicator": {
    backgroundColor: "$green100",
    width: "100%",
    height: "100%",
    transition: "transform 660ms cubic-bezier(0.65, 0, 0.35, 1)",
  },
  ".Head": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 400,
    gap: '1rem',
  },
  ".List": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
});
