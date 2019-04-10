export const getMovieYear = (releaseDate) => (
  new Date(releaseDate).getFullYear()
)

export const shuffle = (array) => (
  array.sort(() => Math.random() - 0.5)
)
