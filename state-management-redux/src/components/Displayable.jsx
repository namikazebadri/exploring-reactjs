import { useSelector } from 'react-redux'

const Displayable = () => {
    const count = useSelector((state) => state.counter.value)

    return (
        <div title="Displayable component.">
            <p>You clicked {count} times. (<strong>Displayable Component</strong>)</p>
        </div>
    );
};

export default Displayable;