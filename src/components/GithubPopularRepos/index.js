import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    languagesList: [],
    selectedLanguage: languageFiltersData[0].id,
    isLoading: true,
  }

  componentDidMount() {
    this.getTechnologies()
  }

  getTechnologies = async () => {
    const {selectedLanguage} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${selectedLanguage}`
    const response = await fetch(url)
    const data = await response.json()
    const popularRepos = data.popular_repos
    const updatedData = popularRepos.map(item => ({
      name: item.name,
      id: item.id,
      issuesCount: item.issues_count,
      forksCount: item.forks_count,
      avatarUrl: item.avatar_url,
      starsCount: item.stars_count,
    }))

    this.setState({languagesList: updatedData, isLoading: false})
  }

  updateSelectedLanguage = id => {
    this.setState({selectedLanguage: id}, this.getTechnologies)
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderItems = () => {
    const {languagesList} = this.state
    return (
      <ul className="items-container">
        {languagesList.map(eachItem => (
          <RepositoryItem eachItem={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Popular</h1>
        <ul className="tabs-section">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              eachItem={eachItem}
              key={eachItem.id}
              updateSelectedLanguage={this.updateSelectedLanguage}
            />
          ))}
        </ul>
        {isLoading ? this.renderLoader() : this.renderItems()}
      </div>
    )
  }
}

export default GithubPopularRepos
