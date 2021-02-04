import { StyledTitle } from "../styles";

const Home = () => {
  return (
    <div>
      <div
        class="vh-100"
        style={{
          backgroundImage: `url(https://i.pinimg.com/originals/be/e2/16/bee216fe545375389f0e842d1a8310db.gif)`,
          backgroundSize: "cover",
        }}
      >
        <StyledTitle>
          Hello! <br />
          Let's keep our shelves busy.
        </StyledTitle>
      </div>
    </div>
  );
};

export default Home;
