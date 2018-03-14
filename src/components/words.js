import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './words.css'

class Game extends PureComponent {
  render() {
    return (
      <div>

        <header>{ this.props.rule.wordToShow }</header>


        { this.props.rule.isWinner ? alert("You win million") : null }
        { this.props.rule.gameOver ? alert("You lost million") : null }
        { this.props.rule.isWinner ? <img className="hngm" src= "https://i1.wp.com/newyorkparkingticket.com/wp-content/uploads/2009/09/NYPT-WIN_how-to-beat-a-NYC-parking-ticket.png?ssl=1"
          alt="first" /> :null}
          {this.props.rule.wrongGuessCount===1 ? <img className="hangman" src="man.png"
          alt="first" /> : null}
          {this.props.rule.wrongGuessCount===2 ? <img className="hangman" src="man(1).png"
          alt="first" /> : null}
          {this.props.rule.wrongGuessCount===3 ? <img className="hangman" src="man(2).png"
          alt="first" /> : null}
          {this.props.rule.wrongGuessCount===4 ? <img className="hangman" src="man(3).png"
          alt="first" /> : null}
          {this.props.rule.wrongGuessCount===5 ? <img className="hangman" src="man(4).png"
          alt="first" /> : null}
          {this.props.rule.wrongGuessCount===6 ? <img className="hangman" src="man(5).png"
          alt="first" /> : null}
          {this.props.rule.wrongGuessCount>6 ? <img className="hangman" src="man(6).png"
          alt="first" /> : null}



          <h3>Wrong answers: { this.props.rule.wrongGuessCount} </h3>
          <h3>Putted letters: { this.props.rule.guesses + ','} </h3>
      </div>

    )
  }
}

const mapStateToProps = ({rule}) => ({
  rule
})

export default connect(mapStateToProps)(Game)
