const Header = () => {
  return (
    <div className="mt-10 mx-auto text-center">
      <h1 className="mb-8 text-3xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
        <span>My</span>{" "}
        <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
          Github Repo
        </span>{" "}
        <span>Scraper</span>
      </h1>
    </div>
  );
};

export default Header;
