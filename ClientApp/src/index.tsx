import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ConfigProvider } from "antd";
import { App } from "./App";

const queryClient = new QueryClient();
const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <QueryClientProvider client={queryClient}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4e6ea3",
          borderRadius: 5,
          colorTextBase: "rgb(102, 102, 102)",
          fontFamily: `"Roboto", "Helvetica Neue", Helvetica, Arial`,
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </QueryClientProvider>
);