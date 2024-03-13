import "../styles/About.css";
import src from "../assets/cslogo.jpg";
export default function AboutLayout() {
  return (
    <>
      <div className="about-container">
        <h1>Computer Science</h1>
        <div className="p-container">
          <p>
            Computer science focuses on the development and testing of software
            and software systems. It involves working with mathematical models,
            data analysis and security, algorithms, and computational theory.
            Computer scientists define the computational principles that are the
            basis of all software.
          </p>
          <br /><br />      
          <p>
            Computing jobs are among the highest paid today, and computer
            science professionals report high job satisfaction. Most computer
            scientists hold at least a bachelor s degree in computer science or
            a related field.
          </p>
        </div>

        <img src={src} alt="cs logo"></img>
      </div>
    </>
  );
}
