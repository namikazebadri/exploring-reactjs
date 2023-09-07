import {useDispatch} from 'react-redux'

import { increment } from '../stores/reducers/counter'

const Counter = () => {
    const dispatch = useDispatch()

    return (
        <div title="Counter component.">
            <button onClick={() => {
                dispatch(increment());
            }}>
                Click me (<strong>Counter Component</strong>)
            </button>
        </div>
    );
};

export default Counter