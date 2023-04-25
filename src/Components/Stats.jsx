import "./stats.css";

const Stats = () => {

  const bs = { boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }
  return (

    <div className="stats-main">

      <div >
        <a  href="https://github.com/MohanM501">
          <img id="github-streak-stats"
            style={bs}
            fontFamily={'Josefin Sans'}
            src="https://github-readme-streak-stats.herokuapp.com/?user=MohanM501"
            alt="current_streak"
           // https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=MohanM501
          />
        </a>

        <a  href="https://github.com/MohanM501">
          <img id="github-top-langs"
             style={bs}
             fontFamily={'Josefin Sans'}
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=MohanM501"  //launguages
            //https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=MohanM501
            alt="top-languages"
          />
        </a>

        <a  href="https://github.com/MohanM501">
          <img
            id="github-stats-card"
            style={bs}
            fontFamily={'Josefin Sans'}
            src="https://github-readme-stats.vercel.app/api?username=MohanM501&count_private=true&show_icons=true" //stats
            alt="github_stats"
          />
        </a>
      </div>
    </div>
  );
};
export default Stats;
//https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=snikhil2001&bg_color=0D1117&color=5BCDEC&hide_border=true&width=100vh
//https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=snikhil2001&hide_border=true&theme=react&hide_border=true&bg_color=0D1117