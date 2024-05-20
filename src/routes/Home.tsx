import About from "../components/About/About"
import "./Home.scss"


const Home = () => {
    return (
        <div>
            <h1 className="text-center">Welcome to my Bussiness Appliction</h1>
            <h2 className="text-center text-4xl"> Noel de la tura <span>React project:</span> </h2>

            <About />

        </div>
    )
}

export default Home