import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import data from './data'

function App() {

  const travelData = data.map(list => {
    return <Card
              key={list.id}
              title={list.title}
              location={list.location}
              URL={list.googleMapsUrl}
              startDate={list.startDate}
              endDate={list.endDate}
              description={list.description}
              img={list.imageUrl}
           />
  })

  return (
    <div>
      <Header />
      {travelData}
    </div>
  );
}

export default App;
