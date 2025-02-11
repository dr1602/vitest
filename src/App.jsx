import React from 'react'
import './App.css'
import { kebabCaseToTilteCase } from './utils/helpers'

function App() {
  const [buttonState, setButtonState] = React.useState({
    buttonColor: 'medium-violet-red',
    buttonDisabled: false,
    buttonDisabledColor: 'gray',
  })
  const nextColorClass = buttonState.buttonColor === 'medium-violet-red' ? 'midnight-blue' : 'medium-violet-red'
  const nextColorTitleCase = kebabCaseToTilteCase(nextColorClass);
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
            buttonColor: nextColorClass,
          }))
        }
      >
        Change to {nextColorTitleCase}
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
