import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";

export default function HeadlessDemo() {
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
          borderRadius: 0
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
                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                    <i className="pi pi-home mr-2"></i>
                    <span className="font-medium">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                    <i className="pi pi-bookmark mr-2"></i>
                    <span className="font-medium">Bookmarks</span>
                  </a>
                </li>
                <li>
                  <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li>
                      <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                        <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-table mr-2"></i>
                            <span className="font-medium">View</span>
                          </a>
                        </li>
                        <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-search mr-2"></i>
                            <span className="font-medium">Search</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="pi pi-chart-line mr-2"></i>
                        <span className="font-medium">Expenses</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                    <i className="pi pi-users mr-2"></i>
                    <span className="font-medium">Team</span>
                  </a>
                </li>
                <li>
                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                    <i className="pi pi-comments mr-2"></i>
                    <span className="font-medium">Messages</span>
                    <span
                      className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle"
                      style={{ minWidth: "1.5rem", height: "1.5rem" }}
                    >
                      3
                    </span>
                  </a>
                </li>
                <li>
                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                    <i className="pi pi-calendar mr-2"></i>
                    <span className="font-medium">Calendar</span>
                  </a>
                </li>
                <li>
                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                    <i className="pi pi-cog mr-2"></i>
                    <span className="font-medium">Settings</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Sidebar>
    </div>
  );
}
