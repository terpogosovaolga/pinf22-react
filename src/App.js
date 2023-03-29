import "./style/style.css";
import Header from "./components/Header";
import Filters from "./components/Filters";

function App() {
  console.log("App!");

  return (
    <>
      <Header />

      <main>
        <div className="container">
          <h2>КАТАЛОГ ТУРОВ</h2>
          <Filters
            categories={["все", "по россии", "горящие"]}
            activeIndex={0}
          />
          {/* { Filters(a, b, c) } */}
        </div>
      </main>
    </>
  );
}

export default App;
