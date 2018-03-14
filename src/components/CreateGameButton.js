import './words.css'

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { newGame } from '../actions/guessletter'

export class CreateGameButton extends PureComponent {
  static propTypes = {
    createGame: PropTypes.func.isRequired,
    label: PropTypes.string
  }

  handleClick = () => {
    this.props.newGame()
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="CreateGameButton">
        {this.props.label || "New Game"}
      </button>
    )
  }
}

export default connect(null, { newGame })(CreateGameButton)
