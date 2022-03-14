import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Search() {
	const [input, setInput] = useState('');

	let navigate = useNavigate();

	const submitHandler = e => {
		e.preventDefault();
		navigate(`/searched/${input}`);

		console.log(e);
	};

	return (
		<FormStyle onSubmit={submitHandler}>
			<div>
				<FaSearch />
				<input
					type="text"
					value={input}
					onChange={e => setInput(e.target.value)}
				/>
			</div>
		</FormStyle>
	);
}

const FormStyle = styled.form`
	padding: 0 15rem;
	position: relative;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	div {
		position: relative;
		width: 100%;
	}

	input {
		border: none;
		background: linear-gradient(35deg, #494949, #313131);
		font-size: 1.5rem;
		color: white;
		padding: 1rem 3rem;
		border: none;
		border-radius: 1rem;
		outline: none;
		width: 100%;
	}

	svg {
		position: absolute;
		top: 50%;
		left: 0%;
		transform: translate(100%, -50%);
		color: white;
	}
`;

export default Search;
