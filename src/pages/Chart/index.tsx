import { Panel } from "primereact/panel";
import { Footer } from "../../components/footer";
import { Graphic } from "../../components/graphic";
import { SidBar } from "../../components/Sidebar";
import { Table } from "../../components/table/Table";

export function PageGraphic() {
  return (
    <>
      <SidBar />
      <div className="flex">
        <div className="col-6">
          <Graphic />
          <div className="card">
            <Table />
          </div >
        </div>
        <div className="col-6">
          <Graphic />
          <Table />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PageGraphic;
