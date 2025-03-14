// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Animate } from "react-simple-animate";
// import "./styles.scss";

// const Home = () => {
//   const navigate = useNavigate();

//   const handleNavigateToContactMePage = () => {
//     navigate("/contact");
//   };

//   return (
//     <section id="home" className="home">
//       <div className="home__text-wrapper">
//         <h1>
//           Hello, I'm Rishu
//           <br />
//           Full Stack Developer
//         </h1>
//       </div>

//       <Animate
//         play
//         duration={1.5}
//         delay={1}
//         start={{
//           transform: "translateY(550px)",
//         }}
//         end={{
//           transform: "translatex(0px)",
//         }}
//       >
//         <div className="home__contact-me">
//           <button onClick={handleNavigateToContactMePage}>Hire Me</button>
//           <a href="/Rishu_Resume.pdf" download="Rishu_CV.pdf">
//             <button>Download CV</button>
//           </a>
//         </div>
//       </Animate>
//     </section>
//   );
// };
// export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Rishu
          <br />
          Full Stack Developer
        </h1>
      </div>

      <motion.div
        initial={{ y: 550 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          <a href="/Rishu_Resume.pdf" download="Rishu_CV.pdf">
            <button>Download CV</button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
