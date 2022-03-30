const books = [
    {
        title: "The Design of EveryDay Things",
        author: "Don Norman",
        alreadyRead: false,
        img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true,
        img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
    },
    {
        title: "Thinking with Type",
        author: "Ellen Lupton",
        alreadyRead: true,
        img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
    },
    {
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        alreadyRead: false,
        img: "https://eloquentjavascript.net/img/cover.jpg",
    },
];

const cardContainer = document.querySelector("[data-card-container]");

function addCardToParent(book, parent) {
    const card = `<div class="card">
  <img
      class="card-img-top book-cover"
      src="${book.img}"
      alt="Card image cap"
  />
  <div class="card-body">
      <h5 class="card-title">
          ${book.title}
      </h5>
      <p class="card-text">${book.author}</p>
      <span class="badge rounded-pill ${
          book.alreadyRead ? "bg-success" : "bg-secondary"
      }"
          >${book.alreadyRead ? "Read" : "To read"}</span
      >
  </div>
</div>`;
    parent.innerHTML += card;
}

books.forEach((book) => addCardToParent(book, cardContainer));
