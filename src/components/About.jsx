import "../about.css";

const About = () => {
  return (
    <div
      className="flex flex-col md:flex-row 
    md:max-w-8xl mx-auto about_full_page"
    >
      <div className="flex flex-col md:flex-row about_details items-center justify-between text-center gap-20  md:max-w-7xl mx-auto m-2">
        <div className="about_img">
          <img src="./images/mahabub.png" />
        </div>
        <div className="text-left about_body">
          <div>
            <h1 className=" text-xl " style={{ color: "gold" }}>
              I'm Mahabur Rahman
            </h1>
            <p className="text-md mt-4 text-white">
              I'm a Computer Science & Engineering (CSE) student and passionate
              about competitive programming and web development. As a
              competitive programmer, I live and breathe the world of algorithms
              and data structures. Competitive programming is my battleground,
              where I relish the challenge of tackling complex problems within
              tight time constraints. The thrill of crafting efficient and
              elegant solutions fuels my passion for continuous learning and
              improvement. Beyond competitive programming, I'm passionate about
              web development. I enjoy building beautiful, responsive and
              user-friendly websites. I also enjoy keeping up-to-date with the
              latest technologies and continuously strive to improve my skills
              and knowledge.
            </p>
          </div>
          <div className="flex font-medium text-white text-left text-lg mt-5 justify-between about_identity ">
            <p>Birthday: 5 October 1998</p>
            <p>Phone: +1797515386</p>
            <p>Email: mahabur24cse@gmail.com</p>
          </div>
        </div>

        <div className="mt-10 mb-10 interest">
          <h1 className="text-white text-left text-xl pl-10">Interests</h1>
          <div className="about_interest">
            <div className="about_interest_items">
              <img src="./images/softwareEngineering.png" />
              <p>Software Engineering</p>
            </div>

            <div className="about_interest_items">
              <img src="./images/development.jpg" />
              <p>Software Development</p>
            </div>
            <div className="about_interest_items">
              <img src="./images/datastructureAndAlgorithm.png" />
              <p>Datastructure & Algorithm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
