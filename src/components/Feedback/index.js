// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: false}

  onClickEmoji = () => this.setState({isEmojiClicked: true})

  render() {
    const {isEmojiClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="bg-container">
        {!isEmojiClicked && (
          <div className="card-container">
            <h1 className="feedback-question">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emojis-container">
              {emojis.map(emoji => (
                <li key={emoji.id}>
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="emoji"
                    onClick={this.onClickEmoji}
                  />
                  <p className="emoji-name">{emoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {isEmojiClicked && (
          <div className="card-container">
            <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
            <h1 className="wishing-text">Thank You!</h1>
            <p className="feedback-answer">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
