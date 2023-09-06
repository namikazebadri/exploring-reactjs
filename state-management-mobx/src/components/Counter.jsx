import {observer} from "mobx-react";

import { counterStore } from '../stores/counter';

const Counter = observer(() => {
    return (
        <div title="Counter component.">
            <button onClick={() => {
                counterStore.increase()
            }}>
                Click me
            </button>
        </div>
    );
});

export default Counter