const extractOrThrow = response => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
};

export default extractOrThrow;
