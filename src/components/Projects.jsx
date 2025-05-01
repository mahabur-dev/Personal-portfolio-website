import "../projects.css";

const Projects = () => {
  return (
    <div className="project_full_body">
      <div className="height_manage text-left">
        <div className="heading_fixed">
          <h1 className="text-white text-xl text-bold">Projects</h1>
        </div>
        <div className="project_all_item">
          <div className="project_item">
            <div className="project_img">
              <img src="./images/reservation.png" />
            </div>
            <div className="items_body">
              <h1 className="text-2xl p-2 ">Resort Reservation System</h1>
              <p className="p-2">
                The Resort Reservation System is a web-based platform designed
                to streamline the booking process for resorts. It allows users
                to browse available rooms, view resort details, make
                reservations, and manage bookings online. The system provides an
                admin panel for resort management, including room inventory
                updates, reservation tracking, and customer management. Key
                features include user authentication, dynamic room
                availability,and a user-friendly interface that ensures a smooth
                reservation experience
              </p>
              <p className="p-2">
                Technologies Used: HTML, CSS, Javascript, PHP, MySQL
              </p>
              <a
                href="https://github.com/Wrong1234/Resort-Reservationj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="cursor-pointer text-xl "
                style={{ color: "gold"}}
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="project_all_item">
          <div className="project_item">
            <div className="project_img">
              <img src="./images/currency_converter.jpg" />
            </div>
            <div className="items_body">
              <h1 className="text-2xl p-2 ">Currency Converter App</h1>
              <p className="p-2 project_defination">
                The Currency Converter is a simple and responsive web
                application that allows users to convert amounts between
                different currencies in real-time. Built using only HTML, CSS,
                and JavaScript, it fetches live exchange rates through an API
                and provides instant, accurate conversions. The app features a
                clean and intuitive user interface, dropdowns for currency
                selection, and real-time calculation without the need for page
                reloads.
              </p>
              <p className="p-2">Technologies Used: HTML, CSS, Javascript</p>
              <a
                href="https://github.com/Wrong1234/Currency-Converter"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-4 cursor-pointer text-xl "
                style={{ color: "gold"}}
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
