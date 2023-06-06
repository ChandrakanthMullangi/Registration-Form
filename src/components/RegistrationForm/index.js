// Write your JS code here

import './index.css'

import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstnameInput: '',
    lastnameInput: '',
    isFirstnameFilled: false,
    isLastnameFilled: false,
    isFormValidate: false,
  }

  onChangeFirstname = event => {
    this.setState({firstnameInput: event.target.value})
  }

  onChangeLastname = event => {
    this.setState({lastnameInput: event.target.value})
  }

  validateFirstname = () => {
    const {firstnameInput} = this.state
    return firstnameInput !== ''
  }

  onBlurFirstName = () => {
    const isValidFirstname = this.validateFirstname()
    this.setState({isFirstnameFilled: !isValidFirstname})
  }

  validateLastname = () => {
    const {lastnameInput} = this.state
    return lastnameInput !== ''
  }

  onBlurLastname = () => {
    const isValidLastname = this.validateLastname()
    this.setState({isLastnameFilled: !isValidLastname})
  }

  onSubmitForm = event => {
    event.preventDefault()

    const isValidFirstname = this.validateFirstname()
    const isValidLastname = this.validateLastname()

    if (isValidFirstname && isValidLastname) {
      this.setState({isFormValidate: true})
    } else {
      this.setState({
        isFirstnameFilled: !isValidFirstname,
        isLastnameFilled: !isValidLastname,
        isFormValidate: false,
      })
    }
  }

  renderFirstname = () => {
    const {firstnameInput, isFirstnameFilled} = this.state
    const firstnameClass = isFirstnameFilled ? 'blur' : ''
    return (
      <>
        <label className="label" htmlFor="first-name">
          FIRST NAME
        </label>
        <input
          type="text"
          className={`input ${firstnameClass}`}
          id="first-name"
          placeholder="Firstname"
          value={firstnameInput}
          onChange={this.onChangeFirstname}
          onBlur={this.onBlurFirstName}
        />
      </>
    )
  }

  renderLastname = () => {
    const {lastnameInput, isLastnameFilled} = this.state
    const lastnameClass = isLastnameFilled ? 'blur' : ''
    return (
      <>
        <label className="label" htmlFor="last-name">
          LAST NAME
        </label>
        <input
          type="text"
          className={`input ${lastnameClass}`}
          id="last-name"
          placeholder="Lastname"
          value={lastnameInput}
          onChange={this.onChangeLastname}
          onBlur={this.onBlurLastname}
        />
      </>
    )
  }

  renderRegistrationForm = () => {
    const {isFirstnameFilled, isLastnameFilled} = this.state
    return (
      <form className="form" onSubmit={this.onSubmitForm}>
        {this.renderFirstname()}
        {isFirstnameFilled && <p className="error-message">Required</p>}
        {this.renderLastname()}
        {isLastnameFilled && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      firstnameInput: '',
      lastnameInput: '',
      isFormValidate: !prevState.isFormValidate,
    }))
  }

  renderRegistrationSuccess = () => (
    <div className="registration">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="submitted-text">Submitted Successfully </p>
      <button
        type="button"
        className="submit-another-response"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFormValidate} = this.state

    return (
      <div className="app-container">
        <h1 className="heading"> Registration </h1>
        {isFormValidate
          ? this.renderRegistrationSuccess()
          : this.renderRegistrationForm()}
      </div>
    )
  }
}

export default RegistrationForm
