import { styled } from ".";

export const NavBar = styled("div", {
    display: "flex",
    height: 54,
    background: "$purple200",
    alignItems: "center",
    justifyContent: 'center',
    gap: '0.0625rem',
    input: {
      padding: "0px 15px",
      width: 240,
      height: 34,
    },
    a: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: '$white',
      width: 34,
      height: 34,
    },
  });