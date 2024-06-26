import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import { Link } from "react-router-dom";
import Logo from "../../assets/conmac.jpg";

export function SidBar() {
  const [visibleLeft, setVisibleLeft] = useState(false);

  return (
    <div className="card">
      <Menubar
        style={{
          height: "4rem",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 1rem",
          backgroundColor: "#24A2AD",
          borderRadius: 0,
        }}
        start={() => (
          <Button
            style={{
              backgroundColor: "#24A2AD",
              height: "3rem",
            }}
            icon="pi pi-bars"
            onClick={() => setVisibleLeft(true)}
          />
        )}
      />

      <Sidebar
        visible={visibleLeft}
        position="left"
        onHide={() => setVisibleLeft(false)}
      >
        <div className="overflow-y-auto">
          <ul className="list-none p-3 m-0">
            <li>
              <ul className="list-none p-0 m-0 overflow-hidden">
                <li>
                  <img src={Logo} alt="logo" className="w-5 mb-5" />
                </li>
                <li>
                  <Link
                    to="/grafico"
                    className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full no-underline"
                  >
                    <i className="pi pi-chart-bar mr-2"></i>
                    <span className="font-medium">Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/produtos"
                    className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full no-underline"
                  >
                    <i className="pi pi-table mr-2"></i>
                    <span className="font-medium">Tabela</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/report"
                    className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full no-underline"
                  >
                    <i className="pi pi-file-pdf mr-2"></i>
                    <span className="font-medium">Relatório</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Sidebar>
    </div>
  );
}
