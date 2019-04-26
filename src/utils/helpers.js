export const getMovieYear = (releaseDate) => (
  new Date(releaseDate).getFullYear()
)

export const shuffle = (array) => (
  array.sort(() => Math.random() - 0.5)
)

export const sortByField = (objs, field) => (
  objs.sort((a,b) => (a[field] < b[field]) ? 1 : ((b[field] < a[field]) ? -1 : 0))
)
