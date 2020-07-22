import React,{useState} from 'react';
import './App.css';
import SearchBar from './Components/SearchBarComponent/SearchBar';
import MediaGrid from './Components/MediaGridComponent/MediaGrid';
import { IUserInput } from './Common/Interfaces';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';

function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "Mars",
    StartDate: new Date('2014-08-18T21:11:54'),
    EndDate: new Date('2018-08-18T21:11:54'),
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }
  return (
    <div className="App">
      <SearchBar/>
    </div>
  );
}

export default App;
