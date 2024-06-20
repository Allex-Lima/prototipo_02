import Graphic from "../components/graphic/Graphic"
import Table from "../components/table/Table"
import { Panel } from 'primereact/panel'

const PageReport = () => {
  return (
    <div>
        <h2 className="text-center">Relatório</h2>
        <div className="p-grid p-justify-center p-align-center" style={{ padding: '2rem' }}>
            <div className="p-col-12 p-md-10">
                <Panel header="Dados Mensais">
                    <div className="p-grid">
                        <div className="p-col-12 p-md-6">
                            <Graphic />
                        </div>
                        <div className="p-col-12 p-md-6">
                            <Table />
                        </div>
                    </div>
                </Panel>
            </div>
        </div>
    </div>
  )
}

export default PageReport