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
    
    function compareDefault (a,b){
      if (a.id < b.id) {
        return -1;
      } else if (a.id>b.id) {
        return 1;
      }
      return 0
    }
    function compareTitle (a,b){
      if (a.title < b.title) {
        return -1;
      } else if (a.title>b.title) {
        return 1;
      }
      return 0
    }
    function compareAuthor (a,b){
      if (a.author < b.author) {
        return -1;
      } else if (a.author>b.author) {
        return 1;
      }
      return 0
    }
    
    let sortedArr;
    
    if (val === "default") {
      sortedArr = arr.sort(compareDefault)
    } else if (val === "title"){
      sortedArr = arr.sort(compareTitle)
    } else if (val === "author") {
      sortedArr = arr.sort(compareAuthor)
    }
    setBooks(sortedArr)
    
    
  }

  
  return (
    <div className="App">
      <header style={{background: "#EFFEFD"}}>
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
