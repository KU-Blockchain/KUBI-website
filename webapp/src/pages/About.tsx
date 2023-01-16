import * as React from "react";
import { BioCard } from "../components/bioCard";
import jayhawk from "./jayhawk-4.png"

const About = () => {
  return (
    <>
      <div>About</div>
      <BioCard
        avatar={jayhawk}
        name={"Emma Nasseri"}
        email={"enasseri02@ku.edu"}
        job={"President"}
      ></BioCard>
      <BioCard
        avatar={"avatar"}
        name={"Johnathon Lemons"}
        email={"email address"}
        job={"Vice President of Business"}
      ></BioCard>
      <BioCard
        avatar={"avatar"}
        name={"Hudson Headley"}
        email={"hudsonh@ku.edu"}
        job={"Vice President of Engineering"}
      ></BioCard>
      <BioCard
        avatar={"avatar"}
        name={"Hannah Smith"}
        email={"email address"}
        job={"Director of Education"}
      ></BioCard>
      <BioCard
        avatar={"avatar"}
        name={"Payden Brunton"}
        email={"email address"}
        job={"Director of Research and Education"}
      ></BioCard>
      <BioCard
        avatar={"avatar"}
        name={"Keanen Inthavongsa"}
        email={"email address"}
        job={"Director of Content Creation"}
      ></BioCard>
    </>
  );
};

export default About;
