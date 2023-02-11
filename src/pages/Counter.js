import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from '../features/counter/counterSlice';

const Counter = () => {
	const counter = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	const [incrementAmount, setIncrementAmount] = useState(0);

	const addValue = Number(incrementAmount) || 0;

	const incrementClick = () => {
		dispatch(increment());
	};

	const decrementClick = () => {
		dispatch(decrement());
	};

	const resetAll = () => {
		setIncrementAmount(0);
		dispatch(reset());
	};

	const incrementByAmountClick = () => {
		dispatch(incrementByAmount(addValue));
	};

	return (
		<div>
			<h1>{counter}</h1>
			<div>
				<button onClick={incrementClick}>Increment</button>
				<button onClick={decrementClick}>Decrement</button>
				<button onClick={resetAll}>Reset</button>
			</div>
			<input
				type="text"
				value={incrementAmount}
				onChange={(e) => setIncrementAmount(e.target.value)}
			/>
			<div>
				<button onClick={incrementByAmountClick}>Add Amount</button>
			</div>
		</div>
	);
};

export default Counter;
