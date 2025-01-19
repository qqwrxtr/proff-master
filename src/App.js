import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import Privacy from "./Pages/Privacy/Privacy";
import Terms from "./Pages/Terms/Terms";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./assets/ScrollToTop/ScrollToTop";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                {/* Header */}
                <header>
                    <Header />
                </header>
                
                {/* Main Content */}
                <main>
                    <Routes>
                        {/* Main Page */}
                        <Route path="/" element={<MainPage />} />
                        {/* Privacy Page */}
                        <Route path="/privacy/" element={<Privacy />} />
                        {/* Terms Page */}
                        <Route path="/terms/" element={<Terms />} />
                    </Routes>
                </main>
                
                {/* Footer */}
                <footer>
                    <Footer />
                </footer>
            </div>
        </Router>
    );
}

export default App;
