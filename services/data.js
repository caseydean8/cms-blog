import Submarine from "../public/images-600x338/submarine.webp";
import ShoppingApp from "../public/images-600x338/shopity.webp";
import BookSafe from "../public/images-600x338/book-safe.webp";
import Crystal from "../public/images-600x338/crystal-vibes.webp";
import Ahoy from "../public/images-600x338/react-ahoy.webp";
import ProMgmt from "../public/images-600x338/projectMgmt.webp"

const data = [
  {
    id: "submarine",
    image: Submarine,
    link: "https://blooming-peak-13476.herokuapp.com/",
    title: "Submarine",
    repo: "https://github.com/caseydean8/submarine",
    text:
      "Submarine is a subscription tracking app built with the react, node, mongo, express, and bootstrap. \n You can take a look around with username 'guest' and password 'guest'.",
  },
  {
    id: "shopping-app",
    image: ShoppingApp,
    link: "https://shopity.herokuapp.com/",
    title: "Shopity",
    repo: "https://github.com/caseydean8/shopity-app",
    text:
      "Shopity is helpful shopping assistant that allows users to login and create a list of pantry items, which can then moved onto a shopping list and then into a virtual cart. Shopity was created with the Pug template engine, an SQL database with the sequelize.js ORM, and express",
  },
  {
    id: "book-safe",
    image: BookSafe,
    link: "https://book-safe-react.herokuapp.com/",
    title: "Book Safe",
    repo: "https://github.com/caseydean8/book-safe",
    text:
      "Book Safe is an full stack MERN application that allows the user to search for a book title and receive information, including the books author or authors, a thumbnail of the book cover, and a link to the book on google books. The user can then save the book information on a remote database for future reference, and delete the book from that database if desired.\n \n The application utilizes the following technologies: \n React \n Node \n Express \n MongoDB \n Heroku \n axios \n bootstrap",
  },
  {
    id: "graphql-mgmt",
    image: ProMgmt,
    link: "https://graphql-mgmt.herokuapp.com/",
    title: "GraphQL MGMT",
    repo: "https://github.com/caseydean8/GraphQL-MGMT-App",
    text:
      "GraphQL MGMT is a full stack application using the GraphQL query management system. It is built with React, Express, MongoDB, Apollo, and Bootstrap 5. Users can create, update, and delete clients as well as their related projects",
  },
  {
    id: "crystal-vibes",
    image: Crystal,
    link: "https://caseydean8.github.io/crystal-vibes/",
    title: "Crystal Vibes",
    repo: "https://github.com/caseydean8/crystal-vibes",
    text:
      "This project uses javascript and jQuery to render a number guessing game. \n A random number between 19 and 120 is displayed, and a random number between 1 and 12 is assigned to each of four crystal buttons but is not displayed. \n When a player clicks on a button, the value is added to a score below the buttons and if the player can match the random number displayed, a win is recorded. If the player goes over a loss is recorded. \n Button values are displayed in the console for testing.",
  },
  {
    id: "react-ahoy",
    image: Ahoy,
    link: "https://caseydean8.github.io/ahoy/",
    title: "React Ahoy!",
    repo: "https://github.com/caseydean8/ahoy",
    text: "React Ahoy is image memorization SPA. \n The game contains twelve ship images and the user is challenged to click them all without clicking the same ship twice.",
  },
  // {
  //   id: "",
  //   image: "",
  //   link: ""
  //   title: "",
  //   repo: "",
  //   text: ""
  // },
];

export default data;
