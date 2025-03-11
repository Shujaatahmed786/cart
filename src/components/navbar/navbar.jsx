import links from "../data/links";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-4 bg-[#3c8bdb] text-lg px-5 py-3">
      {links.map((item, id) => (
        <div key={id} className="text-white font-bold cursor-pointer">
          <a
            key={id}
            href={item.path}
            className="text-white font-bold cursor-pointer"
          >
            <i>{item.name}</i>
          </a>
        </div>
      ))}
      <div>
        <img src="/assets/cart.svg" className="w-12 h-12" alt="Cart" />
      </div>
    </div>
  );
};

export default Navbar;
