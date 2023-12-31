import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Shop from './Shop';
import Mainpage from './Mainpage';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Mainpage />} />
            <Route path='/shop' element={<Shop />} />
        </Routes>
    );
}