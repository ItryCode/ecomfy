import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>/{title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--main-clr);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--sec-clr);
  a {
    color: #fd9f97;
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--sec-clr);
  }
`;

export default PageHero;
