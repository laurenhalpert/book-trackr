import React, {useState, useEffect} from "react"
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home"
import Library from "./Library"
import MyTBR from "./MyTBR"
import MyRead from "./MyRead"
import './App.css';

function App() {
  
  const [books, setBooks] = useState([])
  const [tBRBooks, setTBRBooks] = useState([])
  const [readBooks, setReadBooks] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
    fetch("http://localhost:3000/books")
    .then(r=>r.json())
    .then(books => setBooks(books))
  }, [])

  function updateTBRBooks(bookObj) {
    bookObj.onTBR = true;
    setTBRBooks([...tBRBooks, bookObj])
  }

  function updateReadBooks(bookObj) {
    setReadBooks([...readBooks, bookObj])
  }

  function handleRemoval(bookObj){
    setTBRBooks(tBRBooks.filter(book => book.id !== bookObj.id))
  }

  function handleNewBook(bookObj) {
    console.log(bookObj)
    setBooks([...books, bookObj])
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
            <Library books={books} onAddToTBR={updateTBRBooks} onAddToRead={updateReadBooks} onRemove={handleRemoval} onNewBook={handleNewBook} search={search} onSearch={setSearch}/>
          </Route>
          <Route path="/mytbr">
            <MyTBR books={tBRBooks} onAddToRead={updateReadBooks} onAddToTBR={updateTBRBooks} onRemove={handleRemoval}/>
          </Route>
          <Route path="/myread">
            <MyRead books={readBooks}/>
          </Route>
        </Switch>

    </div>
  );
}

export default App;
