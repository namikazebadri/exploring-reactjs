import {useObjectState} from "@uidotdev/usehooks";

import './App.css'

const initialState = {
    counter: 0
}

function App() {
    const [state, setState] = useObjectState(initialState);

    return (
        <div>
            <h3>Local State Management (useHooks - useObjectState)</h3>
            <p>
                Below is two different components sharing same state.<br/>
                If you click <strong>Counter</strong> component, <strong>Displayable</strong> component will show the current value of the counter
            </p>
            <div title="Counter component.">
                <button onClick={() => {
                    setState(state => ({ counter: state.counter + 1 }));
                }}>
                    Click me (<strong>Counter Component</strong>)
                </button>
            </div>
            <div title="Displayable component.">
                <p>You clicked {state.counter} times. (<strong>Displayable Component</strong>)</p>
            </div>
        </div>
    )
}

export default App
