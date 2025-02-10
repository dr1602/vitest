import React from 'react'
import './App.css'

function App() {
  const [buttonState, setButtonState] = React.useState({
    buttonColor: 'red',
    buttonDisabled: false,
    buttonDisabledColor: 'gray',
  })
  const nextColor = buttonState.buttonColor === 'red' ? 'blue' : 'red'
  const handleChangeCheckbox = (event) => {
    setButtonState((prevState) => ({
      ...prevState,
      buttonDisabled: event.target.checked,
    }))
  }

  return (
    <div>
      <button
        className={!buttonState.buttonDisabled ? buttonState.buttonColor : buttonState.buttonDisabledColor }
        disabled={buttonState.buttonDisabled}
        onClick={
          () => setButtonState((prevState) => ({
            ...prevState,
            buttonColor: nextColor,
          }))
        }
      >
        Change to {nextColor}
      </button>
      <br />
      <input
        type='checkbox'
        id='disable-button-checkbox'
        checked={buttonState.buttonDisabled}
        onChange={handleChangeCheckbox}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
