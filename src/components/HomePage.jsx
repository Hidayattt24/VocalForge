const HomePage = () => {
  return (
    <>
      {/* Main Content */}
      <main className="flex-1 p-4 flex flex-col gap-3 sm:gap-4 md:gap-5 justify-center">
        {/* Text */}
        <div className="text-7xl sm:text-7xl md:text-7xl text-white ">
          <h1>
            Vocal <span className="text-ungu">Forge</span>
          </h1>
        </div>
        {/* h3  */}
        <h3 className="text-sm mt-2 text-white">
          Record <span className="text-ungu">&rarr;</span> Transcribe{" "}
          <span className="text-ungu">&rarr;</span> Translate
        </h3>
        {/* Record */}
        <div>
          <button className="italic text-ungu flex items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4 specialBtn py-2 px-4 rounded-lg">
            <p className="text-xs ">Press to recording...</p>
            <span class="material-symbols-outlined ">mic</span>
          </button>
        </div>
        <p className="text-ungu">
          Or{" "}
          <label className="text-ungu">
            <span className="font-bold cursor-pointer hover:text-unguMuda duration-200 ">
              Upload{" "}
              <input className="hidden" type="file" accept=".mp3,.wave" />
            </span>
            a mp3 file
          </label>
        </p>
      </main>
    </>
  );
};

export default HomePage;
