import React, { Component } from 'react';
import './App.css'
import BookList from './BookList'
class App extends Component {

   state = {
      value: '',
      items: '',
   }

   handleInput = (e) => {
      this.setState({
         value: e.target.value
      })
      if (this.state.value === '') {
         this.setState({
            items: '',
         })
      }
   }

   handleSubmit = (e) => {
      e.preventDefault()

      const API = `https://www.googleapis.com/books/v1/volumes?q=${this.state.value}`;

      fetch(API)

         .then(response => response.json())

         .then(data => {
            this.setState({
               items: data.items,

            })

         })


   }


   render() {

      return (
         <>
            <form onSubmit={this.handleSubmit}>
               <input
                  onChange={this.handleInput}
                  value={this.state.value} type="text"
                  placeholder="Wpisz tytuł książki..."
               />
               <button>Szukaj książek</button>


               <BookList items={this.state.items} value={this.state.value} />


            </form>
         </>

      );
   }
}

export default App;
