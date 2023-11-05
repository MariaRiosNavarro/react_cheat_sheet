import Card from "../components/Card";
import { reactArray } from "../db/reactArray";

const Home = () => {
  return (
    <section>
      <header>
        <h1 className="text-4xl text-center font-bold p-8">
          React <span className="block text-primary">Cheat Sheet</span>
        </h1>
      </header>
      <div className="grid md:grid-cols-2">
        {reactArray.map((item) => (
          <Card key={item._id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Home;
