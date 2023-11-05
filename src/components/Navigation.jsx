import { reactArray } from "../db/reactArray";

const Navigation = () => {
  return (
    <nav className="flex justify-center items-center p-4 flex-wrap gap-2">
      {reactArray.map((item) => (
        <a
          className="p-4 text-xl bg-secondary text-white rounded-xl "
          key={item._id}
          href={`#${item.link}`}
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
