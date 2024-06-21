import { PageGraphic } from "../pages/Chart";
import { PageLogin } from "../pages//Login";
import { PageTable } from "../pages/Table";
import { PageReport } from "../pages/Report";

import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<PageLogin />} />
        <Route path="/produtos" element={<PageTable />} />
        <Route path="/grafico" element={<PageGraphic />} />
        <Route path="/report" element={<PageReport />} />
      </Switch>
    </BrowserRouter>
  );
}
