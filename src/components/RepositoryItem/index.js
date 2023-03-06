import {BsFillStarFill} from 'react-icons/bs'
import {VscRepoForked} from 'react-icons/vsc'
import {GoIssueOpened} from 'react-icons/go'
import './index.css'

const RepositoryItem = props => {
  const {eachItem} = props
  const {id, name, avatarUrl, issuesCount, starsCount, forksCount} = eachItem

  return (
    <li className="each-item-card">
      <img src={avatarUrl} className="image-style" alt={name} />
      <h2 className="header">{name}</h2>
      <div className="text-and-icons-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="style-star"
        />
        <p className="text-style">{starsCount} stars</p>
      </div>
      <div className="text-and-icons-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="style-star"
        />
        <p className="text-style">{forksCount} forks</p>
      </div>
      <div className="text-and-icons-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="style-star"
        />
        <p className="text-style">{issuesCount} issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
