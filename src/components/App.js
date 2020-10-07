import React from "react";
import ListWrapper from "./ListWrapper/ListWrapper";
import Form from "./Form/Form";

let initialStateAccounts = [
  {
    image:
      "https://i.pinimg.com/originals/53/f3/a5/53f3a5bb2365dbfcf26cb5729250b365.jpg",
    name: "Geralt",
    description: `Geralt był synem czarodziejki Visenny i (najprawdopodobniej) wojownika Korina. Krótko po narodzinach został on oddany przez matkę do wiedźmińskiej Szkoły Wilka w twierdzy Kaer Morhen. W trakcie szkolenia na wiedźmina został poddany Próbie Traw, a następnie Zmianom, które przeszedł nadzwyczaj dobrze.`,
    twitterLink: "https://wiedzmin.fandom.com/wiki/Geralt",
  },
  {
    image:
      "https://preview.redd.it/dihqbvbfnny41.jpg?width=640&crop=smart&auto=webp&s=8624d5acd5e1b78dfe8de648a3aa6abbbaabb42b",
    name: "Vesemir",
    description:
      " Mistrz miecza, nauczyciel szermierki oraz znawca potworów, preceptor wiedźminów Geralta i Eskela. Przekazuje Ciri swoją wiedzę na temat najróżniejszych bestii i potworów. Dla Geralta przybrany ojciec i nauczyciel. Nosił siwą brodę. Spięty i zakłopotany w obecności Triss Merigold. Miał słabość do Triss. Nie mógł oswoić się z tym, że czarodziejka nie jest już dzieckiem.",
    twitterLink: "https://wiedzmin.fandom.com/wiki/Vesemir",
  },
  {
    image:
      "https://preview.redd.it/63np9q44vbi01.jpg?width=960&crop=smart&auto=webp&s=9a5d2c84b20f4ef01d5cec0c74728274e0731998",
    name: "Ciri",
    description:
      "Fiona Elen Riannon, zdrobniale Ciri, zwana też Lwiątkiem z Cintry, Dzieckiem Starszej Krwi, Jaskółką – księżniczka Cintry, córka królewny Pavetty i Duny'ego (Jeża z Erlenwaldu), wnuczka królowej Calanthe, potomkini legendarnej elfiej czarodziejki Lary Dorren i nosicielka Starszej Krwi. Od ojca wywodzi się z cesarskiego rodu var Emreis, a od matki z Cerbinów.",

    twitterLink: "https://wiedzmin.fandom.com/wiki/Ciri",
  },
  {
    image: "https://pbs.twimg.com/media/DmmnIkPVAAAibG8.jpg",
    name: "Triss Merigold",
    description:
      " temerska czarodziejka, była doradczyni króla Foltesta, członkini Rady Królewskiej Temerii, a po jej rozwiązaniu Loży Czarodziejek. Uczestniczka Bitwy o Wzgórze Sodden. Od czasu Pogromu w Rivii nazywana Nieulękłą a po Polowaniach na Czarownice doradczyni króla Tankreda z Koviru.",
    twitterLink: "https://wiedzmin.fandom.com/wiki/Triss_Merigold",
  },
  {
    image:
      "https://bestofcomicbooks.com/wp-content/uploads/2018/11/Yennefer-Hot-Photoshoot-2.jpg",
    name: "Yennefer z Vengerbergu",
    description:
      " Urodzona w Belleteyn 1173 roku. Chociaż miała 94 lata w czasie rozgrywania się wydarzeń opisanych w Wieży Jaskółki, utrzymywała młody wygląd i urodę przy pomocy magii. Na szyi nosi obsydianową gwiazdę (jej osobisty amulet). W bitwie na Wzgórzu Sodden została oślepiona przez Fringillę Vigo. Wzrok został jej magicznie przywrócony. Po bitwie została najmłodszą członkinią Rady Czarodziejów. W Czasie pogardy, podczas zjazdu na Thanned została niesłusznie oskarżona o zdradę stanu. Od uwięzienia uwolniła ją Francesca Findabair, która planowała umieścić ją w tajnej Loży..",
    twitterLink: "https://wiedzmin.fandom.com/wiki/Yennefer",
  },
];

class App extends React.Component {
  state = {
    items: [...initialStateAccounts],
  };
  AddItem = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    console.log(e.target[3].value);

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value,
    };

    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));

    e.target.reset();
  };
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Witcher Add Item</h1>
        <ListWrapper items={this.state.items} />
        <Form submitFn={this.AddItem} />
      </div>
    );
  }
}

export default App;
