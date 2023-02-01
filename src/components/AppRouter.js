import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Shop from "../page/Shop";
import Auth from "../page/Auth";
import DevicePage from "../page/DevicePage";
import Admin from "../page/Admin";
import Basket from "../page/Basket";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Routes>
            {user.isAuth &&
                <Route exact path={ADMIN_ROUTE} element={<Admin/>}/>
            }
            {user.isAuth &&
                <Route exact path={BASKET_ROUTE} element={<Basket/>}/>
            }

            <Route exact path={SHOP_ROUTE} element={<Shop/>}/>
            <Route exact path={LOGIN_ROUTE} element={<Auth/>}/>
            <Route exact path={REGISTRATION_ROUTE} element={<Auth/>}/>
            <Route exact path={DEVICE_ROUTE} element={<DevicePage/>}/>

            <Route
                path="*"
                element={<Navigate to={SHOP_ROUTE} replace />}
            />
        </Routes>
    );
};

export default AppRouter;