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
    .then(books => {
      setBooks(books.filter(book=> !book.onTBR && !book.onRead))
      setTBRBooks(books.filter(book => book.onTBR))
      setReadBooks(books.filter(book=> book.onRead))
    })
  }, [])

  function updateTBRBooks(bookObj) {
    
    setBooks(books.map(book => book.id === bookObj.id? bookObj : book))
    setTBRBooks([...tBRBooks, bookObj])
  }

  function updateReadBooks(bookObj) {
    setTBRBooks(tBRBooks.filter(book => book.id !== bookObj.id))
    setReadBooks([...readBooks, bookObj])
  }

  function handleRemoval(bookObj){
    setTBRBooks(tBRBooks.filter(book => book.id !== bookObj.id))
    setReadBooks(readBooks.filter(book => book.id !== bookObj.id))
    setBooks([...books, bookObj])
  }

  function handleNewBook(bookObj) {
    console.log(bookObj)
    setBooks([...books, bookObj])
  }
  const booksToDisplay= books.filter(book=> book.title.toLowerCase().includes(search.toLowerCase()) && !book.onTBR)
  
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
            <Library 
              books={booksToDisplay} 
              onAddToTBR={updateTBRBooks} 
              onAddToRead={updateReadBooks} 
              onRemove={handleRemoval} 
              onNewBook={handleNewBook} 
              search={search} 
              onSearch={setSearch}
            />
          </Route>
          <Route path="/mytbr">
            <MyTBR 
              books={tBRBooks} 
              onAddToRead={updateReadBooks} 
              onAddToTBR={updateTBRBooks} 
              onRemove={handleRemoval}
            />
          </Route>
          <Route path="/myread">
            <MyRead books={readBooks} onRemove={handleRemoval}/>
          </Route>
        </Switch>

    </div>
  );
}

export default App;
