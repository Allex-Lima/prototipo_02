import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../../service/ProductService";

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

const PageTable = () => {
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
      <h2 className="text-center">Dados dos Produtos</h2>
      <DataTable
        value={products}
        paginator
        rows={25}
        tableStyle={{ minWidth: "100rem" }}
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
};

export default PageTable;
