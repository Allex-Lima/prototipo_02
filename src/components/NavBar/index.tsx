import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";

export function NavBar() {
  return (
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
        />
      )}
    />
  );
}
