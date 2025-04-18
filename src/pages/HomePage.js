import React from "react";
import Particle from "./../components/Particle";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Typewriter } from "react-simple-typewriter";

const HomePage = () => {
  return (
    <section className="home">
      {/*====== Particle======= */}
      <Particle />

      {/*======= Content=======*/}
      <div className="typography">
        <h1>
          Hello I'm <span>Maria Doe</span>
        </h1>
        {/*===== Typing Text====== */}
        <h2>
          i am a{" "}
          <span>
            <Typewriter
              words={[
                "Front End Developer",
                "website designer",
                "Photographer",
                "Graphics designer",
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={() => console.log(`Done after 5 loops!`)}
            />
          </span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          corporis nisi, tenetur modi ducimus hic?
        </p>

        {/*========= Social media icons======= */}
        <div className="share">
          <a href="https://www.facebook.com/" target="__blank">
            {" "}
            <FacebookIcon />{" "}
          </a>
          <a href="https://twitter.com/" target="__blank">
            {" "}
            <TwitterIcon />{" "}
          </a>
          <a href="https://www.instagram.com/" target="__blank">
            {" "}
            <InstagramIcon />{" "}
          </a>
          <a href="https://in.linkedin.com/" target="__blank">
            {" "}
            <LinkedInIcon />{" "}
          </a>
          <a href="https://github.com/" target="__blank">
            {" "}
            <GitHubIcon />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
