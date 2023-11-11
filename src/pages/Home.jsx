import Card from "../components/Card";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { reactArray } from "../db/reactArray";
import ScrollTo from "../components/ScrollTo";

const Home = () => {
  return (
    <>
      <Header />
      <Navigation />
      <ScrollTo top={true} />
      <section>
        <div className="grid md:grid-cols-2">
          {reactArray.map((item) => (
            <Card key={item._id} {...item} />
          ))}
        </div>
      </section>
      <ScrollTo top={false} />
    </>
  );
};

export default Home;
