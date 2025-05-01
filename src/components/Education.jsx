const Education = () => {
  return (
    <>
      <div className="education_full_div">
    
          <div className="education_card_div flex-col md:flex-row md:max-w-7xl mx-auto">
            <div className="education">
              <img src="./images/islamic_university.png" />
              <div className="education_body p-4">
                <p>B.Sc in Computer Science</p>
                <p>Janurary 2019 - 2025</p>
              </div>
            </div>
            <div className="education">
              <img src="./images/birganj.jpg" />
              <div className="education_body p-4">
                <p className="">Group : Science</p>
                <p>Janurary 2015 - 2017</p>
              </div>
            </div>
            <div className="education">
              <img src="./images/school.jpg" />
              <div className="education_body p-3">
                <p>Chowdhuryhat High School</p>
                <p>Group : Science</p>
                <p>Janurary 2010 - 2015</p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Education;
