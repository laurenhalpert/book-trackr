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
  const [search, setSearch] = useState("")
  
  
  let booksToDisplay= books.filter(book=> book.title.toLowerCase().includes(search.toLowerCase()) && !book.onTBR)

  useEffect(()=>{
    fetch("http://localhost:3000/books")
    .then(r=>r.json())
    .then(books => {
      setBooks(books)
      
    })
  }, [])

  function updateTBRBooks(bookObj) {
    
    setBooks(books.map(book => book.id === bookObj.id? bookObj : book))
    
  }

  function updateReadBooks(bookObj) {
    
    setBooks(books.map(book=> book.id === bookObj.id? bookObj: book))
    
  }

  function handleRemoval(bookObj){
    
    setBooks(books.map(book=> book.id === bookObj.id? bookObj: book))
    
  }

  function handleNewBook(bookObj) {
    
    setBooks([...books, bookObj])
  }
  
  let tBRBooks = books.filter(book=> book.onTBR)
  let readBooks = books.filter(book => book.onRead)

  function handleSort(val, arr){
    
    let sortedArr;
    
    if (val === "default") {
      sortedArr = arr.sort((a,b)=> a.id>b.id? 1: -1)
    } else if (val === "title"){
      sortedArr = arr.sort((a,b)=> a.title>b.title? 1: -1)
    } else if (val === "author") {
      sortedArr = arr.sort((a,b)=> a.author>b.author? 1: -1)
    }
    setBooks(sortedArr)
    
    
  }

  
  return (
    <div className="App">
      <header>
        <h1 id="site-title">Book Trackr</h1>
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
            onSort={handleSort}
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
          <MyRead 
            books={readBooks} 
            onRemove={handleRemoval} 
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
