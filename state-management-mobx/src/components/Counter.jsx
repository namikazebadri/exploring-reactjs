import {observer} from "mobx-react";

import { counterStore } from '../stores/counter';

const Counter = observer(() => {
    return (
        <div title="Counter component.">
            <button onClick={() => {
                counterStore.increase()
            }}>
                Click me (<strong>Counter Component</strong>)
            </button>
        </div>
    );
});

export default Counter