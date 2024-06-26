import { Card } from "primereact/card";
import { SidBar } from "../../components/Sidebar";
import { Footer } from "../../components/footer";
import { Graphic } from "../../components/graphic";
import { Table } from "../../components/table/Table";

export function PageReport() {
  return (
    <div className="bg-white-alpha-80">
      <SidBar />
      <h2 className="text-center">Relatório</h2>
      <div className="flex ">
        <div className="col-6 m-0">
          <Card className="w-full h-full">
            <Graphic />
          </Card>
        </div>
        <div className="col-6">
          <Card className="w-full h-full p-2">
            <Table />
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
