import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to BIS Shopping Spree</h1>
      <Link to="/game"><button>Play Now</button></Link>
    </div>
  );
};

export default Home;
