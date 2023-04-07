import React, {useState} from "react"
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home"
import Library from "./Library"
import MyTBR from "./MyTBR"
import MyRead from "./MyRead"
import './App.css';

function App() {
  const [tBRBooks, setTBRBooks] = useState([])
  const books = [
    {
      id: 1,
      title: "Apples Never Fall",
      author: "Liane Moriarty",
      image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611956842i/56143578._SY75_.jpg"
    },
    {
      id: 2,
      title: "Truly Madly Guilty",
      author: "Liane Moriarty",
      image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1491122565i/27831371._SY75_.jpg"
    },
    {
      id: 3,
      title: "In Five Years",
      author: "Rebecca Serle",
      image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586399012i/50093704._SY75_.jpg"
    },
    {
      id: 4,
      title: "One By One",
      author: "Ruth Ware",
      image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1587655884i/50892433._SY75_.jpg"
    }
  ]

  function updateTBRBooks(bookObj) {
    setTBRBooks([...tBRBooks, bookObj])
  }
  
  return (
    <div className="App">
      <header>
        <h1>Book Trackr</h1>
        <NavBar />
      </header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/library">
            <Library books={books} onAddToTBR={updateTBRBooks}/>
          </Route>
          <Route path="/mytbr">
            <MyTBR books={tBRBooks} />
          </Route>
          <Route path="/myread">
            <MyRead />
          </Route>
        </Switch>

    </div>
  );
}

export default App;
