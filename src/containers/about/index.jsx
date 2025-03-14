// import React from "react";
// import { BsInfoCircleFill } from "react-icons/bs";
// import PageHeaderContent from "../../components/pageHeaderContent";
// import { Animate } from "react-simple-animate";
// import "./styles.scss";
// import { DiApple, DiAndroid } from "react-icons/di";
// import { FaDev, FaDatabase } from "react-icons/fa";

// const personalDetails = [
//   {
//     label: "Name",
//     value: "Rishu Kumar",
//   },
//   {
//     label: "Age",
//     value: "25",
//   },
//   {
//     label: "Address",
//     value: "India",
//   },
//   {
//     label: "Email",
//     value: "rishukr930@gmail.com",
//   },
//   {
//     label: "Contact No",
//     value: "+91 7549765831",
//   },
// ];

// const jobSummary =
//   "A highly motivated MCA graduate with a strong foundation in software development, web technologies, and database management. Skilled in C, Python, JavaScript, Java, and SQL, with hands-on experience in React, Node.js, MySQL, Firebase, and GitHub. Proficient in Agile and Scrum methodologies, with excellent problem-solving and time management skills. Completed a Web Development Internship at Prodigy InfoTech, gaining experience in API integration, troubleshooting, and collaborative development. Developed multiple projects, including an Object Counting Model using Computer Vision, a Weather App using React, and an Anti-Ragging Website with MySQL database integration. A quick learner and team player, eager to contribute technical expertise and analytical skills in an entry-level role while fostering professional growth.";

// const About = () => {
//   return (
//     <section id="about" className="about">
//       <PageHeaderContent
//         headerText="About Me"
//         icon={<BsInfoCircleFill size={40} />}
//       />
//       <div className="about__content">
//         <div className="about__content__personalWrapper">
//           <Animate
//             play
//             duration={1.5}
//             delay={1}
//             start={{
//               transform: "translateX(-900px)",
//             }}
//             end={{
//               transform: "translatex(0px)",
//             }}
//           >
//             <h3>Full Stack Developer</h3>
//             <p>{jobSummary}</p>
//           </Animate>

//           <Animate
//             play
//             duration={1.5}
//             delay={1}
//             start={{
//               transform: "translateX(500px)",
//             }}
//             end={{
//               transform: "translatex(0px)",
//             }}
//           >
//             <h3 className="personalInformationHeaderText">
//               Personal Information
//             </h3>
//             <ul>
//               {personalDetails.map((item, i) => (
//                 <li key={i}>
//                   <span className="title">{item.label}</span>
//                   <span className="value">{item.value}</span>
//                 </li>
//               ))}
//             </ul>
//           </Animate>
//         </div>
//         <div className="about__content__servicesWrapper">
//           <Animate
//             play
//             duration={1.5}
//             delay={1}
//             start={{
//               transform: "translateX(600px)",
//             }}
//             end={{
//               transform: "translatex(0px)",
//             }}
//           >
//             <div className="about__content__servicesWrapper__innerContent">
//               <div>
//                 <FaDev size={60} color="var( --yellow-theme-main-color)" />
//               </div>
//               <div>
//                 <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
//               </div>
//               <div>
//                 <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
//               </div>
//               <div>
//                 <DiApple size={60} color="var( --yellow-theme-main-color)" />
//               </div>
//             </div>
//           </Animate>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default About;

import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { motion } from "framer-motion";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Rishu Kumar",
  },
  {
    label: "Age",
    value: "25",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "rishukr930@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 7549765831",
  },
];

const jobSummary =
  "A highly motivated MCA graduate with a strong foundation in software development, web technologies, and database management. Skilled in C, Python, JavaScript, Java, and SQL, with hands-on experience in React, Node.js, MySQL, Firebase, and GitHub. Proficient in Agile and Scrum methodologies, with excellent problem-solving and time management skills. Completed a Web Development Internship at Prodigy InfoTech, gaining experience in API integration, troubleshooting, and collaborative development. Developed multiple projects, including an Object Counting Model using Computer Vision, a Weather App using React, and an Anti-Ragging Website with MySQL database integration. A quick learner and team player, eager to contribute technical expertise and analytical skills in an entry-level role while fostering professional growth.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <motion.div
            initial={{ x: -900 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <h3>Full Stack Developer</h3>
            <p>{jobSummary}</p>
          </motion.div>

          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <div className="about__content__servicesWrapper">
          <motion.div
            initial={{ x: 600 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
