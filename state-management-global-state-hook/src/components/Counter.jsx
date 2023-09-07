import useCounter from '../stores/counter';

const Counter = () => {
    const [{ counter }, setState] = useCounter();

    return (
        <div title="Counter component.">
            <button onClick={() => {
                setState(state => ({ ...state, counter: counter + 1 }));
            }}>
                Click me (<strong>Counter Component</strong>)
            </button>
        </div>
    );
};

export default Counter