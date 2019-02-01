/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const GithubUser = ({ githubUser, hasGithubUser }) => {
  if (!hasGithubUser) return <div />;
  return (
    <div>
      <img
        alt={`${githubUser.login}'s avatar`}
        css={css`
          max-width: 10rem;
        `}
        src={githubUser.avatar_url}
      />
      <p>Name: {githubUser.login}</p>
      <p>Attack: {githubUser.public_repos}</p>
      <p>Speed: {githubUser.public_gists}</p>
      <p>HP: {githubUser.followers}</p>
      <p>Defense: {githubUser.following}</p>
    </div>
  );
};

export default GithubUser;
