import "./App.css";
import styled from "styled-components";
import { ObjectDetector } from "./components/objectDetector";

const AppContainer = styled.div`
	width: 100%;
	display: flex;
	/* flex-direction: column; */
	align-items: center;
	justify-content: center;
	color: #fff;
	gap: 40px;
`;

function App() {
	return (
		<>
			<div className='group'>
				<h2>Text and Shapes To Speech Converter </h2>
			</div>
			<AppContainer>
				<ObjectDetector />
			</AppContainer>
		</>
	);
}

export default App;
