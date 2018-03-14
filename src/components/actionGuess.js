import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import guessGame from '../actions/guessletter'


class Guess extends PureComponent {
  constructor(props) {
    super()
  }


    handleKeyPress = (event) => {
      console.log(event.key)
      this.props.guessGame(event.key)}

    componentDidMount() {
      window.addEventListener('keypress', this.handleKeyPress)
      }


  render() {

    return (
      <div>

        </div>
    )}}

export default connect(null, { guessGame })(Guess)
