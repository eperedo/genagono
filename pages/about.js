import DefaultLayout from './../components/DefaultLayout';

function About() {
	return (
		<DefaultLayout title="Preguntas Frecuentes">
			<div className="container">
				<style jsx>{`
					.answer {
						font-size: 20px;
					}

					.container {
						margin: 0 auto;
						max-width: 600px;
					}

					.question {
						color: gray;
						font-weight: bold;
					}

					.question-container {
						display: flex;
						flex-direction: column;
						justify-content: center;
					}
				`}</style>
				<div className="question-container">
					<p className="question">Qué son los octágonos?</p>
					<p className="answer">
						Etiquetas que llevarán ciertos alimentos/bebidas cuando superan los
						límites recomendados de azucar, sal o grasas{' '}
					</p>
				</div>
				<div className="question-container">
					<p className="question">Cuales son esos límites?</p>
					<p className="answer">
						Puedes verlo{' '}
						<a
							href="https://busquedas.elperuano.pe/normaslegales/decreto-supremo-que-aprueba-el-reglamento-de-la-ley-n-30021-decreto-supremo-n-017-2017-sa-1534348-4/"
							rel="noopener noreferrer"
							target="_blank"
							title="Enlace a Decreto de aprobación de Ley Alimentación Saludable"
						>
							acá
						</a>{' '}
						y la ley completa{' '}
						<a
							href="http://www.leyes.congreso.gob.pe/Documentos/Leyes/30021.pdf"
							rel="noopener noreferrer"
							target="_blank"
							title="Enlace a Ley de Alimentación Saludable"
						>
							acá
						</a>
					</p>
				</div>
				<div className="question-container">
					<p className="question">
						Por qué el estado me obliga a comer bajo sus reglas?
					</p>
					<p className="answer">
						Puedes comer lo que te de la gana aún, el estado solo cumple con
						avisarte que ciertos alimentos pueden hacerte daño.
					</p>
				</div>
				<div className="question-container">
					<p className="question">
						Esto hará quebrar a los pobres empresarios que venden dichas
						bebidas/alimentos?
					</p>
					<p className="answer">
						Los empresarios ya quebraron cuando ganó Humala en el 2011, cada vez
						que se sube el sueldo mínimo, cuando la gente mete cancha al cine,
						cuando conga no fue, y cuando no se indultó a Fujimori en el 2011
						porque estaba al filo de la muerte y aún sigue vivo.
					</p>
				</div>
			</div>
		</DefaultLayout>
	);
}

export default About;
