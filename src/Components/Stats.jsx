import "./stats.css";

const Stats = () => {

  const bs = { boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }
  return (

    <div className="stats-main">

      <div >
        <a  href="https://github.com/MohanM501">
          <img id="first"
            style={bs}
            src="https://github-readme-streak-stats.herokuapp.com/?user=MohanM501"
          />
        </a>

        <a  href="https://github.com/MohanM501">
          <img id="second"
             style={bs}
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=MohanM501"  //launguages
          />
        </a>

        <a  href="https://github.com/MohanM501">
          <img
            id="third"
            style={bs}
            src="https://github-readme-stats.vercel.app/api?username=MohanM501&count_private=true&show_icons=true" //stats
          />
        </a>
      </div>
    </div>
  );
};
export default Stats;