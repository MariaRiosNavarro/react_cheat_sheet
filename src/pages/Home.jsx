import Card from "../components/Card";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { reactArray } from "../db/reactArray";
import ScrollTo from "../components/ScrollTo";
import Masonry from "react-masonry-css";

const Home = () => {
  const breakpointColumnsObj = {
    default: 2, // default 2 col
    700: 1, // One col for small displays
  };

  return (
    <>
      <Header />
      <Navigation />
      <ScrollTo top={true} />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {reactArray.map((item) => (
          <Card key={item._id} {...item} />
        ))}
      </Masonry>
      <ScrollTo top={false} />
    </>
  );
};

export default Home;
