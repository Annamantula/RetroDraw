import React, { useState, useEffect } from 'react';
import Header from './Header';
import Palette from './Palette';
import Grid from './Grid';
import ActionPanel from './ActionPanel';
import {COLORS,buildCellList} from '../utils.js'

/**
 * The App component represents our entire application. It contains all of the
 * top level components, and is responsible for helping its children communicate 
 * with each other via state objects, and state functions.
 */
const App = () => {
  [acrtiveColor,setActiveColor]= useState(COLORS[0])
  [cellList, setCellList] = useState(getCellListFromLocal())

  const getCellListFromLocal = () => {
    let cellList = JSON.parse(localStorage.getItem('cellList'));

    if (cellList) {
      return cellList;
    }

    return buildCellList();
  };

  const setCellListOnLocal = (cellList) => {
    localStorage.setItem('cellList', JSON.stringify(cellList));
  };
  const setCellList = (newCellList) => {
    setCellListOnLocal(newCellList);
    _setCellList(newCellList);
  };

  const _setCellList = (newCellList) => {
    setCellList(newCellList);
  };

  useEffect(() => {
    _setCellList(getCellListFromLocal());
  }, []);

  useEffect (()=>{
    localStorage.setItem('cellList', JSON.stringify(cellList));
  },[cellList]);
  

    {/* Header needs no props */}
    {/* Palette needs to be passed activeColor and setActiveColor */}
    {/* Grid needs to be passed activeColor, cellList, and setCellList */}
    {/* ActionPanel needs to be passed activeColor, cellList, and setCellList */}

return (
  <div className="app">
    <Header />
    <Palette activeColor={activeColor} setActiveColor={setActiveColor} />
    <Grid activeColor={activeColor} cellList={cellList} setCellList={setCellList}/>
     <ActionPanel  activeColor = {activeColor} cellList ={cellList} setCellList = {setImmediateCellList}/>
  </div>
);
};

export default App;



