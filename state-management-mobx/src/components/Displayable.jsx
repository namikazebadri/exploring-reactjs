import { counterStore } from '../stores/counter';

import {observer} from "mobx-react";

const Displayable = observer(() => {
    return (
        <div title="Displayable component.">
            <p>You clicked {counterStore.counter} times. (<strong>Displayable Component</strong>)</p>
        </div>
    );
})

export default Displayable