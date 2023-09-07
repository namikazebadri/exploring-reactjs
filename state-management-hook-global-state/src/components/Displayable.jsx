import useGlobalState from '../stores/counter';

const Displayable = () => {
    const [count, ] = useGlobalState('count');

    return (
        <div title="Displayable component.">
            <p>You clicked {count} times. (<strong>Displayable Component</strong>)</p>
        </div>
    );
};

export default Displayable