import axios from 'axios'
import apiUrl from '../apiConfig'

// create a function that makes an axios request to fetch all movies
export const movieIndex = user => {
  return axios({
    url: apiUrl + '/movies',
    method: 'GET',
    // include an authorization header, that includes our user's token
    // so the API knows who to sign out
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

// this function will create a movie using axios
export const movieCreate = (movie, user) => {
  return axios({
    url: apiUrl + '/movies',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    // pass the data to create a movie
    data: { movie }
  })
}

export const movieShow = (id, user) => {
  return axios({
    url: `${apiUrl}/movies/${id}`,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const movieDelete = (id, user) => {
  return axios({
    url: `${apiUrl}/movies/${id}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
