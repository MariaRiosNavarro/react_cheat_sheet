import Card from "../components/Card";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { reactArray } from "../db/reactArray";
import { Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <Navigation />
      <section>
        <div className="grid md:grid-cols-2">
          {reactArray.map((item) => (
            <Card key={item._id} {...item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
