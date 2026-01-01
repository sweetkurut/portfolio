import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";

function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main>
                    <Hero />
                    <AboutMe />
                    <Services />
                    <Technologies />
                    <Projects />
                    <Reviews />
                    <Contact />
                </main>
                <Footer />
            </div>
        </I18nextProvider>
    );
}

export default App;
