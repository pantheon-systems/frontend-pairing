/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const errorState = css`
  border-color: red;
`;

const formContainer = css`
  margin-bottom: 2rem;
`;

const flexContainer = css`
  display: flex;
`;

const inputStyles = css`
  flex: 1;
  border-right: 0;
`;

const redText = css`
  color: red;
`;

const GithubSearch = ({ formError, handleFormSubmit }) => {
  const hasFormError = !!formError && formError.length > 0;
  return (
    <form css={formContainer} onSubmit={handleFormSubmit}>
      <div css={flexContainer}>
        <input
          autoComplete="off"
          css={[inputStyles, hasFormError && errorState]}
          placeholder="Github profile search"
          name="githubUser"
          type="text"
        />
        <button css={hasFormError && errorState} type="submit">
          Search Github
        </button>
      </div>

      {hasFormError && <p css={redText}>{formError}</p>}
    </form>
  );
};

export default GithubSearch;
