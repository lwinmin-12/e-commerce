import React from 'react';
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import SearchedItems from "./component/SearchedItems";
import {Colect} from "./store/Collection";
import { useContext } from "react";

const Container = () => {
    const {    searchedItems    } = useContext(Colect)

    return (
        <div className="relative overflow-hidden">
            <Navbar/>
            <div >
                {searchedItems.text.length > 0 ? <SearchedItems/>  : <Home/> }
                {/*<SearchedItems/>*/}
            </div>
        </div>
    );
};

export default Container;