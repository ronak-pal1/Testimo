const Header = () => {
  return (
    <header className="flex flex-1 justify-evenly items-center px-10 py-6 backdrop-blur-md sticky top-0 left-0 z-50">
      <div className="flex flex-[0.3]">
        <h1 className="text-2xl font-bold">Testimon</h1>
      </div>

      <div className="flex flex-[0.4] justify-evenly">
        <p>How it works?</p>
        <p>Pricing</p>
        <p>About</p>
      </div>

      <div className="flex flex-[0.3] justify-end">
        <button className="bg-blue-700 text-white px-4 py-2 text-xs transition-transform hover:scale-110 rounded-md">
          Login
        </button>
        <button className="bg-black text-white px-6 py-2 text-xs ml-3 transition-transform hover:scale-110 rounded-md">
          Try for free!
        </button>
      </div>
    </header>
  );
};

export default Header;
