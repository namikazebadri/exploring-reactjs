import useGlobalState from '../stores/counter';

const Counter = () => {
    const [count, setCount] = useGlobalState('count');

    return (
        <div title="Counter component.">
            <button onClick={() => {
                setCount(count + 1);
            }}>
                Click me (<strong>Counter Component</strong>)
            </button>
        </div>
    );
};

export default Counter