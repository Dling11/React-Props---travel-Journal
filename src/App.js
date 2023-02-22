import Card from "./components/Card"
import Nav from "./components/Nav"
import Data from "./Data"

function App() {
  const getData = Data.map((e)=> {
    return <Card 
            key={e.id}
            item={e}
          />
  })


  return (
    <div className="App">
      <Nav />
      <section className="card-rows">
        {getData}
      </section>
    </div>
  );
}

export default App;
