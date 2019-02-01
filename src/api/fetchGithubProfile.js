const extractOrThrow = response => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
};

const fetchGithubProfile = async profile => {
  let response = await fetch(`https://api.github.com/users/${profile}`);
  return await extractOrThrow(response);
};

export default fetchGithubProfile;
