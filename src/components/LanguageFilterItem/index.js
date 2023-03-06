import {Component} from 'react'
import './index.css'

class LanguageFilterItem extends Component {
  state = {isClicked: false}

  render() {
    const {isClicked} = this.state
    const {eachItem, updateSelectedLanguage} = this.props
    const {id, language} = eachItem

    const onChangeId = () => {
      updateSelectedLanguage(id)
      this.setState(prevState => ({isClicked: !prevState.isClicked}))
    }

    const btn = isClicked ? 'style-button' : ''

    return (
      <li>
        <button className={`button ${btn}`} type="button" onClick={onChangeId}>
          {language}
        </button>
      </li>
    )
  }
}
export default LanguageFilterItem
