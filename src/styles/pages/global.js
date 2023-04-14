import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Luckiest Guy, cursive",
    "-webkit-font-smoothing": "antialiased",
  },
  body: {
    backgroundColor: "$purple100",
    color: "$white",
  },
  "body, input, textarea, button": {
    border: "none",
    outline: "none",
  },
});
