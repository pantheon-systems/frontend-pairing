import { Global, css } from "@emotion/core";
import React from "react";

const globalCSS = css`
  html {
    box-sizing: border-box;
    font-size: 85%;
    @media (min-width: 45em) {
      font-size: 95%;
    }
    @media (min-width: 75em) {
      font-size: 100%;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    color: #555;
    font-family: georgia, serif;
    line-height: 1.5;
    margin: 0;
  }

  p,
  h1,
  h2,
  h3,
  ol,
  ul {
    margin-top: 0;
  }

  p,
  li {
    font-size: 1.15rem;
  }

  p {
    margin-bottom: 1em;
  }

  h1,
  h2,
  h3,
  h4 {
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.5em;
  }

  h1 {
    font-size: 2.5em;
    @media (min-width: 45em) {
      font-size: 4.5em;
    }
  }

  h2 {
    font-size: 2em;
    @media (min-width: 45em) {
      font-size: 3.5em;
    }
  }

  h3 {
    font-size: 1.75em;
    @media (min-width: 45em) {
      font-size: 2.5em;
    }
  }

  h4 {
    font-size: 1.25em;
    @media (min-width: 45em) {
      font-size: 1.75em;
    }
  }

  a {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    color: #0074d9;
    text-decoration: none;

    &:visited {
      color: #b10dc9;
    }
    &:hover {
      color: #39cccc;
    }
  }

  ol,
  ul {
    margin-bottom: 2em;
  }

  li > ul {
    margin-top: -1em;
    margin-bottom: 1em;
  }

  input,
  button {
    border: 1px solid #555;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    padding: 0.25rem 0.5rem;
  }
`;

const GlobalStyles = () => <Global styles={globalCSS} />;

export default GlobalStyles;
