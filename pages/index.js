import { useState } from 'react';
import DefaultLayout from './../components/DefaultLayout';
import { downloadPng } from './../utils';

function Home({ defaultWord }) {
	const [lineOne, setLineOne] = useState(defaultWord[0]);
	const [lineTwo, setLineTwo] = useState(defaultWord[1]);
	const [lineThree, setLineThree] = useState(defaultWord[2]);

	function onSubmit(e) {
		e.preventDefault();
		const text = `${lineOne} ${lineTwo} ${lineThree}`;
		downloadPng(text);
	}

	return (
		<DefaultLayout title="Genera tu octágono">
			<div className="container">
				<style jsx>
					{`
						.btn-success {
							background-color: green;
							box-shadow: 0 0.2rem 0 0 green;
							border: 0.2rem solid green;
							color: #fff;
							font-size: 20px;
							padding: 10px;
							position: relative;
						}

						.btn-success:active {
							box-shadow: none;
							top: 0.2rem;
						}

						.container {
							align-items: center;
							display: flex;
							justify-content: center;
						}

						@media (max-width: 426px) {
							.container {
								flex-direction: column;
							}
						}

						.form-control {
							display: flex;
							flex-direction: column;
							margin-top: 10px;
						}

						.form-input {
							border: 1px solid black;
							border-radius: 2px;
							font-size: 20px;
							padding: 10px;
						}

						legend {
							text-align: center;
						}
					`}
				</style>
				<form onSubmit={(e) => onSubmit(e)}>
					<legend>Crea tu octágono</legend>
					<div className="form-control">
						<label htmlFor="top-text">Texto 1</label>
						<input
							className="form-input"
							id="top-text"
							value={lineOne}
							onChange={(e) => setLineOne(e.target.value)}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="mid-text">Texto 2</label>
						<input
							className="form-input"
							id="mid-text"
							value={lineTwo}
							onChange={(e) => setLineTwo(e.target.value)}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="bottom-text">Texto 3</label>
						<input
							className="form-input"
							id="bottom-text"
							value={lineThree}
							onChange={(e) => setLineThree(e.target.value)}
						/>
					</div>
					<div className="form-control">
						<button className="btn-success" type="submit">
							Descargar
						</button>
					</div>
				</form>
				<svg
					id="octgen"
					width="512"
					height="512"
					viewBox="0 0 716 716"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M109.337 252.444L256.8 107.533L463.54 109.337L608.452 256.8L606.648 463.54L459.185 608.452L252.444 606.648L107.533 459.185L109.337 252.444Z"
						fill="white"
						stroke="black"
						strokeWidth="9"
					/>
					<path
						d="M263.359 121.15L459.286 122.86L596.617 262.61L594.908 458.536L455.158 595.868L259.231 594.158L121.899 454.408L123.609 258.482L263.359 121.15Z"
						fill="black"
					/>
					<text
						fill="white"
						xmlSpace="preserve"
						style={{ whiteSpace: 'pre' }}
						fontFamily="Arial"
						fontSize="65"
						fontWeight="bold"
						letterSpacing="0em"
						textAnchor="middle"
					>
						<tspan x="50%" y="292.717">
							{lineOne}
						</tspan>
					</text>
					<text
						fill="white"
						xmlSpace="preserve"
						style={{ whiteSpace: 'pre' }}
						fontFamily="Arial"
						fontSize="65"
						fontWeight="bold"
						letterSpacing="0em"
						textAnchor="middle"
					>
						<tspan x="50%" y="377.717">
							{lineTwo}
						</tspan>
					</text>
					<text
						fill="white"
						xmlSpace="preserve"
						style={{ whiteSpace: 'pre' }}
						fontFamily="Arial"
						fontSize="65"
						fontWeight="bold"
						letterSpacing="0em"
						textAnchor="middle"
					>
						<tspan x="50%" y="462.717">
							{lineThree}
						</tspan>
					</text>
				</svg>
			</div>
		</DefaultLayout>
	);
}

function getInitialProps() {
	const defaultWords = [
		['ALTO EN', 'FALLAR', 'GOLES'],
		['ALTO EN', 'MENTAR', 'LA MADRE'],
		['ALTO EN', 'EMPUJAR', 'EN EL METRO'],
		['BAJO EN', 'RESPETAR', 'EL SEMAFORO'],
		['BAJO EN', 'PAGAR', 'IMPUESTOS'],
		['FRAGIL EN', 'MASCULINIDAD', ''],
		['ALTO EN', 'MACHISMO'],
		['ALTO EN', 'CORRUPCION'],
		['ALTO EN', 'ESTAR', 'CHUPANDO'],
		['ALTO EN', 'COIMAS', ''],
		['ALTO EN', 'DRAMAS', ''],
		['ALTO EN', 'BLINDAR', 'A CHAVARRY'],
	];

	const index = parseInt(Math.random() * defaultWords.length);
	return {
		defaultWord: defaultWords[index],
	};
}

Home.getInitialProps = getInitialProps;

export default Home;
