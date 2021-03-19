import React, { Component } from 'react'
import { movieShow, movieDelete } from '../../api/movies'
import Spinner from 'react-bootstrap/Spinner'
import { withRouter, Redirect } from 'react-router-dom'

class MovieShow extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movie: null,
      deleted: false
    }
  }

  componentDidMount () {
    const { user, msgAlert, match } = this.props

    movieShow(match.params.id, user)
      .then(res => this.setState({ movie: res.data.movie }))
      .then(() => msgAlert({
        heading: 'Loaded Movie Successfully',
        message: 'The movie is now displayed.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to load movie.',
          message: 'Could not load movie with error:' + error.message,
          variant: 'danger'
        })
      })
  }

  handleDelete = event => {
    const { user, msgAlert, match } = this.props

    movieDelete(match.params.id, user)
      .then(res => this.setState({ deleted: true }))
      .then(() => msgAlert({
        heading: 'Movie Deleted',
        message: 'The movie was deleted.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to delete movie.',
          message: 'Could not delete movie with error:' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { movie, deleted } = this.state

    if (!movie) {
      return (
        <Spinner variant='primary' animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    if (deleted) {
      return <Redirect to='/movies' />
    }

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>{movie.title}</h3>
          <h4>{movie.director}</h4>
          <button onClick={this.handleDelete}>Delete Movie</button>
        </div>
      </div>
    )
  }
}

export default withRouter(MovieShow)
