import extractOrThrow from './extractOrThrow'

const fetchGithubProfile = async profile => {
  let response = await fetch(`https://api.github.com/users/${profile}`);
  return await extractOrThrow(response);
};

export default fetchGithubProfile;
