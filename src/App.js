import Activities from "./Components/Activities";
import Booking from "./Components/Booking";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import TopBar from "./Components/TopBar";

const App = () => {
    return (
        <div>
            <TopBar />
            <Navbar />
            <Hero />
            <Activities />
            <Booking/>
        </div>
    );
};
export default App;
