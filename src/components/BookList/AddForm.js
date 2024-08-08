import React, { Component } from 'react'
import Book from './Book'

export default class AddForm extends Component {

    constructor() {
        super()

        this.state = {
            books: [],

            title: '',
            author: '',
            year: '',
        }

        this.titleHandler = this.titleHandler.bind(this)
        this.authorHandler = this.authorHandler.bind(this)
        this.yearHandler = this.yearHandler.bind(this)
        this.addBookHandler = this.addBookHandler.bind(this)

    }

    titleHandler(event){
        // console.log(event.target.value);
        let tilte = event.target.value
        this.setState({
            title: tilte
        })
    }

    authorHandler(event){
        // console.log(event.target.value);
        let author = event.target.value
        this.setState({
            author: author
        })
    }

    yearHandler(event){
        // console.log(event.target.value);
        let year = event.target.value
        this.setState({
            year: year
        })
    }


    addBookHandler(event){
        event.preventDefault()

        let bookTitle = this.state.title
        let bookAuthor = this.state.author
        let bookYear = this.state.year

        let bookDetails = {id: this.state.books.length + 1, tilte : bookTitle, author: bookAuthor, year: bookYear}

        if (bookAuthor.length, bookTitle.length, bookYear.length >= 1){

            this.setState({
                books: bookDetails,
                title: '',
                author: '',
                year: '',
            })

        } else {
            alert ('لطفا همه مقادیر را وارد کنید!')
        }
        
    }

    render() {
        return (
            <>
                <form id="book-form" autoComplete="off">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" className="form-control" onChange={this.titleHandler} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" className="form-control" onChange={this.authorHandler} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="year">Year</label>
                        <input type="text" id="year" className="form-control" onChange={this.yearHandler}/>
                    </div>
                    <input type="submit" value="Add Book" className="btn btn-warning btn-block add-btn" onClick={this.addBookHandler}/>
                </form>
                <table class="table table-striped mt-5 text-center">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody id="book-list">
                        {/* {this.state.books.map(book =>{
                        <Book {...book} key={book.id}/>
                        })} */}
                    </tbody>
                </table>


            </>
        )
    }
}
