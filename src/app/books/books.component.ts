import { Component, OnInit } from '@angular/core';

interface Book {
  authors: string[],
  price: number,
  date: string,
  title: string,
  url: string
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Array<Book> = [
    {
      title: 'Get Programming with JavaScript',
      date: 'August 2016',
      authors: ['John R. Larsen'], 
      price: 39.99,
      url: 'https://www.manning.com/books/get-programming-with-javascript'
    }, {
      title: 'Ember.js in Action',
      date: 'June 2014',
      authors: ['Joachim Haagen Skeie'], 
      price: 44.99,
      url: 'https://www.manning.com/books/ember-js-in-action'
    }, {
      title: 'Node.js in Action',
      date: 'October 2013',
      authors: ['Mike Cantelon', 'Marc Harter', 'T.J. Holowaychuk', ' Nathan Rajlich'], 
      price: 44.99,
      url: 'https://www.manning.com/books/node-js-in-action'
    }, {
      title: 'React in Action',
      date: 'August 2017',
      authors: ['Mark Tielens Thomas'], 
      price: 44.99,
      url: 'https://www.manning.com/books/react-in-action'
    }, {
      title: 'jQuery in Action, Third Edition',
      date: 'August 2015',
      authors: ['Bear Bibeault', 'Yehuda Katz', 'Aurelio De Rosa'], 
      price: 44.99,
      url: 'https://www.manning.com/books/jquery-in-action-third-edition'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
