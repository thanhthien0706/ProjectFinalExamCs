import React from "react";
import Routes from "./routes";
import { IBaseComponent } from "./types/baseComponent";

export const App: React.FC<IBaseComponent<any>> = (props) => {
  return (
    <Routes />
  );
}