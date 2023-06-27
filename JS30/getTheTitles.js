const { title } = require("process");

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

    const titles = books.map(books => books.title)

console.log(titles);