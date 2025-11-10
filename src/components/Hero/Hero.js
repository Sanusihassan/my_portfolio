import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I'm Sanusi <br />
          Welcome To My Personal Portfolio
        </SectionTitle>
        <SectionText>
          A Passionate full-stack engineer with 5+ years of hands-on experience
          in developing scalable websites/applications using a wide range of
          front-end and back-end skills like HTML, CSS, JavaScript, Node, etc.
          Designed 5+ websites from scratch at Scaler. Looking further to
          enhance My DevOps skills as a future full-stack developer.
        </SectionText>
        <a href="http://bit.ly/sanusi-resume" target="_blank">
          <Button onClick={props.handleClick}>Learn More</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
