// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputValue: ''}

  updateInputValue = value => {
    this.setState({inputValue: value})
  }

  onChangeSearchInput = event => {
    const {value} = event.target

    this.setState({inputValue: value})
  }

  render() {
    const {inputValue} = this.state

    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                type="text"
                className="letters-input"
                id="phraseText"
                placeholder="Enter the phrase"
                value={inputValue}
                onChange={this.onChangeSearchInput}
              />
            </div>
            <p className="letters-count">No.of letters: {inputValue.length}</p>
          </div>
          <img
            alt="letters calculator"
            className="letters-calculator-image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
