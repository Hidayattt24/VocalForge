import Header from "./components/Header";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <div className="flex-1  p-4 flex flex-col gap-3 text-center sm:gap-4  justify-center pb-20">
      <section className="min-h-screen flex flex-col">
        {/* Header */}
        <Header />
        {/* Main */}
        <HomePage />
      </section>
      <h1></h1>
      <footer></footer>
    </div>
  );
};

export default App;
