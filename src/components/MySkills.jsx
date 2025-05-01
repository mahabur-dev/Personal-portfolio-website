import "../myskills.css";

const MySkills = () => {
  return (
    <>
      <div className="skill_page">
        <div className="skill_body">
          <div className="myskill_header">
            <h2>Language</h2>
          </div>
          <div className="skill_full_card">
            <div className="skill_card_body">
              <img className="skill_card_img" src="./images/c.png" />
              <p className="skill_card_p">C</p>
            </div>
            <div className="skill_card_body">
              <img className="skill_card_img" src="./images/c++.png" />
              <p className="skill_card_p">C++</p>
            </div>
            <div className="skill_card_body">
              <img className="skill_card_img" src="./images/php.png" />
              <p className="skill_card_p">Php</p>
            </div>
            <div className="skill_card_body">
              <img className="skill_card_img" src="./images/js.png" />
              <p className="skill_card_p">Javascipt</p>
            </div>
            <div className="skill_card_body">
              <img className="skill_card_img" src="./images/csharp.png" />
              <p className="skill_card_p">C#</p>
            </div>
          </div>
        </div>

        <div className="skill_body">
          <div className="myskill_header">
            <h2>Developer Tools</h2>
          </div>
          <div className="skill_full_card ">
            <div className="skill_card_body">
              <img className="skill_card_img" src="./images/html.png" />
              <p className="skill_card_p">HTML</p>
            </div>
            <div className="skill_card_body">
              <img className="skill_card_img" src="./images/css.png" />
              <p className="skill_card_p">CSS</p>
            </div>
            <div className="skill_card_body">
              <img className="skill_card_img" src="./images/tailwind.png" />
              <p className="skill_card_p">Tailwind CSS</p>
            </div>
            <div className="skill_card_body">
              <img className="skill_card_img" src="./images/js.png" />
              <p className="skill_card_p">Javascipt</p>
            </div>
            <div className="skill_card_body">
              <img className="skill_card_img" src="./images/bootstrap.png" />
              <p className="skill_card_p">Bootstrap</p>
            </div>
            <div className="skill_card_body">
              <img className="skill_card_img" src="./images/typescript.png" />
              <p className="skill_card_p">Typescript</p>
            </div>
            <div className="skill_card_body">
              <img className="skill_card_img" src="./images/mysql.png" />
              <p className="skill_card_p">Mysql</p>
            </div>
            <div className="skill_card_body">
              <img className="skill_card_img" src="./images/react.png" />
              <p className="skill_card_p">React</p>
            </div>
            <div className="skill_card_body">
              <img className="skill_card_img" src="./images/nodejs.png" />
              <p className="skill_card_p">Node.js</p>
            </div>
            <div className="skill_card_body">
              <img className="skill_card_img" src="./images/expressJs.png" />
              <p className="skill_card_p">Express.js</p>
            </div>
          </div>
        </div>
        <div className="others">
          <div className="skill_body myskills_others">
            <div className="myskill_header">
              <h2>Others</h2>
            </div>
            <div className="skill_full_card">
              <div className="skill_card_body">
                <img className="skill_card_img" src="./images/git.png" />
                <p className="skill_card_p">Git</p>
              </div>
              <div className="skill_card_body">
                <img className="skill_card_img" src="./images/github.png" />
                <p className="skill_card_p">Github</p>
              </div>
              <div className="skill_card_body">
                <img className="skill_card_img " src="./images/vs_code.png" />
                <p className="skill_card_p">VS Code</p>
              </div>
              <div className="skill_card_body">
                <img
                  className="skill_card_img"
                  src="./images/visual_studio.png"
                />
                <p className="skill_card_p">Visual Studio</p>
              </div>
              <div className="skill_card_body">
                <img className="skill_card_img" src="./images/sublime.png" />
                <p className="skill_card_p">Sublime Text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
