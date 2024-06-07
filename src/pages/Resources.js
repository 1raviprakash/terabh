import React from "react";
import Logo from "../components/Logo";

const Resources = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.textContainer}>
          <Logo fontSize="60px" />
          <h1 style={styles.heading}>
            Empower Your <br /> Productivity!
          </h1>
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/login.png"}
            alt="terabhAI login"
            style={{ borderRadius: "60px" }}
          />
        </div>
      </div>
      <div style={styles.SectionHeading}>A truly Personal Assistant</div>
      <div style={styles.features}>
        <div style={styles.featureText}>
          Over time, <Logo fontSize="50px" /> <br />
          knows and learns <br /> about you and is <br /> able to craft <br />{" "}
          responses for you.
          <br />
        </div>
        <img
          src={process.env.PUBLIC_URL + "/login.png"}
          alt="terabhAI login"
          style={{ borderRadius: "60px" }}
        />
      </div>
      <div>
        <div style={styles.SectionHeading}>A truly Personal Assistant</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    justifyContent: "center",
    alignContent: "center",
  },
  content: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    margin: "100px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    fontFamily: "Helvetica",
    fontSize: "50px",
  },
  heading: {
    fontFamily: "Helvetica",
    fontSize: "50px",
  },

  SectionHeading: {
    display: "flex",
    justifyContent: "center",
    fontSize: "60px",
    color: "white",
    fontFamily: "Helvetica",
  },
  features: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "pink",
    borderRadius: "60px",
    width: "80%",
  },
  featureText: {
    fontSize: "50px",
    color: "white",
    fontFamily: "Helvetica",
  },
};

export default Resources;
