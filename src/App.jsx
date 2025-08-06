/*


import Entry from "./components/Entry";
import data from "./data";

import React from "react";

Not Reusable
const App = () => {
  return (
    <>
      <main className="container">
        <Entry />
        <Entry/>
      </main>
    </>
  );
};

Reusable Component - Here we can use Entry with different data
It's just stuck in with one data when there was no props.
import React from "react";
import Entry from "./components/Entry";
import data from "./data";

const myFavoriteTrips = [data[0]]; // Just Mount Fuji
const recentTrips = [data[1], data[2]]; // Sydney and Norway

const App = () => (
  <main className="container">
    <h2>All Trips</h2>
    <Entry entries={data} />

    <h2>Favorite Trip</h2>
    <Entry entries={myFavoriteTrips} />

    <h2>Recent Trips</h2>
    <Entry entries={recentTrips} />
  </main>
);


export default App;

import Entry from "./components/Entry";
import data from "./data";

export default function App() {
  const entryElements = data.map((entry) => {
    return <Entry ent={entry} key={entry.id} />;
    // <Entry {...} key={entry.id} />; Spread operator
    // In Entry component entry.img.src, entry.title
  });
  console.log(entryElements);
  return (
    <>
      <main className="container">{entryElements}</main>
    </>
  );
}
*/

import Header from "./components/Header";
import Main from "./components/Main";
import She from "./components/She";
const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <She />
    </div>
  );
};

export default App;
