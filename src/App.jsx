import React, { useState, useEffect } from "react";

import Card from "./components/Card";
import Skeleton from "./components/Skeleton";
import ProductsData from "./components/Data";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header>
        <Header />
      </header>
      <SearchBar />
      <main className="flex-1">
        <div className="flex flex-col items-center mt-10 gap-5">
          {ProductsData.map((card) => (
            <React.Fragment key={card.id}>
              {loading ? <Skeleton /> : <Card {...card} />}
            </React.Fragment>
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
