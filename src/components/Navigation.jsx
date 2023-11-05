import { reactArray } from "../db/reactArray";

const Navigation = () => {
  return (
    <nav className="flex justify-center items-center p-4 flex-wrap gap-2">
      {reactArray.map((item) => (
        <a
          className="px-4 py-2 text-xl bg-secondary text-white rounded-xl "
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
