import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="font-quick bg-neutral-900 flex flex-col gap-10">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
