import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk " />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline" />
            <p>
              Sunt duis Lorem enim eiusmod ipsum exercitation. Mollit dolore
              mollit aliquip nulla nulla aliqua est officia laborum minim. Ex
              tempor adipisicing esse nulla laborum ipsum commodo fugiat cillum
              labore minim veniam sint. Veniam ullamco Lorem quis officia do
              deserunt ullamco labore consectetur duis sint laboris eu. Ex duis
              voluptate quis consectetur ex in qui ullamco ex occaecat non sunt.
              Id aliqua deserunt laboris id ea pariatur officia reprehenderit eu
              non qui laboris deserunt nostrud. Non pariatur occaecat id tempor
              nostrud pariatur.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
