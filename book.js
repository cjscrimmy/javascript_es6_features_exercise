// const Book = function (author, title, genre) {
//   this.author = author;
//   this.title = title;
//   this.genre = genre;
// };

const Book = class {
  constructor(author, title, genre){
    this.author = author;
    this.title = title;
    this.genre = genre;
  }
};

// module.exports = Book;
export default Book;
