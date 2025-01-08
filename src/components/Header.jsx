const Header = () => {
  return (
    <header className="flex items-center justify-between gap-4 p-4">
      {/* Text */}
      <div className="text-3xl  text-white mx-5">
        <h1>
          Vocal <span className="text-ungu">Forge</span>
        </h1>
      </div>
      {/* Button  */}
      <div className="text-ungu">
        <button className="specialBtn flex items-center gap-2 px-3 py-2 rounded-lg">
          <h1 className="text-sm">New</h1>
          <span class="material-symbols-outlined">add</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
