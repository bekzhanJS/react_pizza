import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Sort from "./components/Sort";
import Items from "./components/Items";

function App() {
  const [cardList, setCardList] = React.useState(["Sad", "sad", "asd"]);

  const d = cardList.map(() => {
    return <>"some text"</>;
  });
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <div className="categories">
              <ul>
                <li className="active">Все</li>
                <li>Мясные</li>
                <li>Вегетарианская</li>
                <li>Гриль</li>
                <li>Острые</li>
                <li>Закрытые</li>
              </ul>
            </div>
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <Items />
        </div>
      </div>
    </div>
  );
}

export default App;
