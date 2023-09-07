import {createDerivate, createGlobalState} from 'react-global-state-hooks';

const counterState = createGlobalState({
    counter: 0
});

const useCounter = createDerivate(counterState, ({ counter }) => ({ counter }));

export default useCounter;