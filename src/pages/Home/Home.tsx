import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      babamozovo <br />
      <Link to={"/login"}>Para login</Link>
      <Link to={"/registerCultivation"}>Para registrar cultivo</Link>
    </div>
  );
}

export default Home;
