import { Navigate, Route, Routes as BrowserRoutes } from "react-router-dom";
import Home from "../pages/Home";
import * as React from "react";
import { ROUTER_CONSTANT } from "../bases/constant";


const Routes: React.FC = () => (
    <>
        <BrowserRoutes>
            <Route path={ROUTER_CONSTANT.HOME} element={<Home />} />
        </BrowserRoutes>
    </>
)

export default React.memo(Routes)