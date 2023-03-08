import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => {
  const animateImg = (e) => {
    e.target.src = "/images/icvrGif.gif";
  };
  const changeToDefaultImg = (e) => {
    e.target.src = "/images/icvr-img.png";
  };
  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Open Source Projects</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          return (
            <BlogCard key={i}>
              {p.title == "ICVR" ? (
                <Img
                  id="icvr"
                  src={p.image}
                  onMouseOut={changeToDefaultImg}
                  onMouseOver={animateImg}
                />
              ) : (
                <Img src={p.image} />
              )}
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={p.visit}>Code</ExternalLinks>
                <ExternalLinks href={p.source}>Source</ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default Projects;
