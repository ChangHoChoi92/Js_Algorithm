import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import App2 from "./App2";


const container = document.getElementById("root");
const root = createRoot(container);


root.render(
    <BrowserRouter>
        <RecoilRoot >
            <App2 />
        </RecoilRoot>
    </BrowserRouter>
);
