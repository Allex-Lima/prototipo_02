import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../../service/ProductService";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./table.css";

interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

interface ColumnMeta {
  field: string;
  header: string;
}

export function Table() {
  const [products, setProducts] = useState<Product[]>([]);

  const columns: ColumnMeta[] = [
    { field: "id", header: "id" },
    { field: "name", header: "Name" },
    { field: "category", header: "Category" },
    { field: "quantity", header: "Quantity" },
    { field: "description", header: "description" },
    { field: "price", header: "price" },
    { field: "inventoryStatus", header: "inventoryStatus" },
    { field: "rating", header: "rating" },
  ];

  useEffect(() => {
    ProductService.getProductsWithOrders().then((data) => setProducts(data));
  }, []);

  return (
    <div className="card">
      <h2 className="text-center">Dados</h2>
      <DataTable
        value={products}
        paginator
        rows={20}
        scrollable
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "70rem" }}
        style={{ borderCollapse: "collapse" }}
        className="custom-table"
      >
        {columns.map((col) => (
          <Column
            key={col.field}
            field={col.field}
            header={col.header}
          ></Column>
        ))}
      </DataTable>
    </div>
  );
}
