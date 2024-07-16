import "./App.css";
import React from "react";
import { MovieSearch } from "./MovieSearch";
import { MovieList } from "./MovieList";

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  const marvelMovies = [
    {
      title: "Iron Man",
      sinopsis:
        "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      duration: "126 minutes",
      category: "Action, Sci-Fi",
      year: "2008",
    },
    {
      title: "The Avengers",
      sinopsis:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
      duration: "143 minutes",
      category: "Action, Adventure, Sci-Fi",
      year: "2012",
    },
    {
      title: "Guardians of the Galaxy",
      sinopsis:
        "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
      duration: "121 minutes",
      category: "Action, Adventure, Comedy",
      year: "2014",
    },
    {
      title: "Captain America: The Winter Soldier",
      sinopsis:
        "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
      duration: "136 minutes",
      category: "Action, Adventure, Sci-Fi",
      year: "2014",
    },
    {
      title: "Black Panther",
      sinopsis:
        "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
      duration: "134 minutes",
      category: "Action, Adventure, Sci-Fi",
      year: "2018",
    },
    {
      title: "Thor: Ragnarok",
      sinopsis:
        "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
      duration: "130 minutes",
      category: "Action, Adventure, Comedy",
      year: "2017",
    },
    {
      title: "Spider-Man: Homecoming",
      sinopsis:
        "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
      duration: "133 minutes",
      category: "Action, Adventure, Sci-Fi",
      year: "2017",
    },
    {
      title: "Doctor Strange",
      sinopsis:
        "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
      duration: "115 minutes",
      category: "Action, Adventure, Fantasy",
      year: "2016",
    },
    {
      title: "Avengers: Infinity War",
      sinopsis:
        "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
      duration: "149 minutes",
      category: "Action, Adventure, Sci-Fi",
      year: "2018",
    },
    {
      title: "Captain Marvel",
      sinopsis:
        "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
      duration: "123 minutes",
      category: "Action, Adventure, Sci-Fi",
      year: "2019",
    },
  ];

  const searchMovies = marvelMovies.filter((movie) => {
    const todoText = movie.title.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  return (
    <>
      <div
        className="align-items-center"
      
      >
        <div className="text-center">
          <h1 className="mb-4">Rich+</h1>
          <div className="container">
          <MovieSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          ></MovieSearch>
          </div>
          <div className="container">
          <MovieList
            movies={searchMovies}>
          </MovieList>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
