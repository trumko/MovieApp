export const fetchMovie = (movieId) => {
  // const { movieId } = this.props.match.params;
  console.log('---------movieId-------', movieId);
  return fetch(`https://reactjs-cdp.herokuapp.com/movies/${movieId}`)
    .then(response => response.json())
}
