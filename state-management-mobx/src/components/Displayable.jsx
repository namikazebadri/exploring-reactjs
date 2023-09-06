import { counterStore } from '../stores/counter';
import {observer} from "mobx-react";

const Displayable = observer(() => {
    return (
        <div title="Displayable component.">
            <p>You clicked {counterStore.counter} times</p>
        </div>
    );
})

export default Displayable