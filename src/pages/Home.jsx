
import Filters from "../components/Filters";
import TourBlocks from "../components/TourBlocks";

function Home() {
    console.log('rerender home');
    return (<main>
        <div className="container">
          <h2>КАТАЛОГ ТУРОВ</h2>
          <Filters
            categories={["все", "по россии", "горящие"]}
            activeIndex={0}
          />
          <TourBlocks />
        </div>
      </main>);
}

export default Home;