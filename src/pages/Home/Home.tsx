import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to={"/login"}>Para login</Link> <br />
      <Link to={"/registerCultivation"}>Para registrar cultivo</Link>
    </div>
  );
}

export default Home;
