import useGlobalState from '../stores/counter';
import useCounter from "../stores/counter";

const Displayable = () => {
    const [{ counter },] = useCounter();

    return (
        <div title="Displayable component.">
            <p>You clicked {counter} times. (<strong>Displayable Component</strong>)</p>
        </div>
    );
};

export default Displayable