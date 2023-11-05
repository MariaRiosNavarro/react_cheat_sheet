import { NavLink } from "react-router-dom";
import { reactArray } from "../db/reactArray";

const Navigation = () => {
  return (
    <nav>
      {reactArray.map((item) => (
        <a key={item._id} href={`#${item.link}`}>
          {item.title}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
