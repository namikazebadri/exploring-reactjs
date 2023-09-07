import './App.css'

import Counter from './components/Counter'
import Displayable from './components/Displayable'

function App() {
  return (
      <div>
          <h3>Global State Management (react-hooks-global-state)</h3>
          <p>
              Below is two different components sharing same state.<br/>
              If you click <strong>Counter</strong> component, <strong>Displayable</strong> component will show the current value of the counter
          </p>
          <Counter></Counter>
          <Displayable></Displayable>
      </div>
  )
}

export default App
