import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails
  const onSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="list-element">
      <p className="suggestion">{suggestion}</p>
      <button className="button" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
          onClick={onSuggestion}
        />
      </button>
    </li>
  )
}

export default SuggestionItem
