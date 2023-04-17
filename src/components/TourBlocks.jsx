import TourBlock from "./TourBlock";
import tours from '../tours.json';

function TourBlocks() {

    // запрос
    console.log(tours);

    return (
    <section className="tours">
        <div className="" style={{ marginTop: "3rem" }}>
            {
                tours.map((t)=> <TourBlock key={t.id} {...t}/>)
            }
        </div>
    </section>
    );
}

export default TourBlocks;