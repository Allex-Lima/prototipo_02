import Graphic from "../components/graphic/Graphic"
import Table from "../components/table/Table"
import { Panel } from 'primereact/panel'

// Import function
import geraPDF from "../util/geraPDF"

const PageReport = () => {

    return (
        <div>
            <h2 className="text-center">Relatório</h2>

            <div id="conteudo-relatorio" className="p-grid p-justify-center p-align-center" style={{ padding: '2rem' }}>
                <div className="p-col-12 p-md-10">
                    <Panel header="">
                        <div className="p-grid">
                            <div className="p-col-12 p-md-6 mt-8 mb-8 ">
                                <Graphic />
                            </div>
                            <div>
                                <h1 className="m-5 text-center">Texto Baseado na Tabela</h1>
                                <p className="text-sm text-justify p-5">
                                    No primeiro semestre de 2024, a Tech Innovators apresentou um desempenho notável em suas vendas, evidenciado por um crescimento consistente mês a mês. Em janeiro, a empresa vendeu 1.200 unidades, gerando uma receita de R$ 240.000,00. Esse número inicial serviu como base para um crescimento impressionante nos meses subsequentes.
                                </p>
                                <p className="text-justify p-5">
                                    Em fevereiro, as vendas aumentaram para 1.300 unidades, resultando em uma receita de R$ 260.000,00 e um crescimento de 8,33% em relação ao mês anterior. Este padrão de crescimento continuou em março, com um aumento de 15,38%, quando foram vendidas 1.500 unidades, totalizando R$ 300.000,00 em receita.
                                </p>
                                <p className="text-justify p-5">
                                    Abril foi mais um mês de progresso, com a Tech Innovators vendendo 1.700 unidades e arrecadando R$ 340.000,00, o que representou um crescimento de 13,33%. Em maio, a empresa registrou 1.800 unidades vendidas e uma receita de R$ 360.000,00, apresentando um crescimento de 5,88%. Embora esse crescimento tenha sido menor em comparação aos meses anteriores, ele ainda demonstra a capacidade da empresa de expandir seu mercado.
                                </p>
                                <p className="text-justify p-5">
                                    O semestre encerrou de maneira promissora em junho, com 2.000 unidades vendidas e uma receita total de R$ 400.000,00. Este mês apresentou um crescimento de 11,11% em relação a maio, confirmando a tendência positiva da empresa.
                                </p>
                            </div>
                            <div className="p-col-12 p-md-6">
                                <Table />
                            </div>
                        </div>
                    </Panel>
                </div>
            </div>
            <button onClick={geraPDF} style={{
                padding: 5,
                marginLeft: '45%',
                marginTop: '0.1rem',
                marginBottom: '2rem',
                background: 'rgba(5, 82, 4, 0.8)',
                color: '#fff',
                fontWeight: "bold",
                borderRadius: '10px',
                border: '3px solid rgba(6, 247, 3, 0.8)',
                cursor: 'pointer'
            }}>GERAR RELATÓRIO</button>
        </div>
    )
}

export default PageReport