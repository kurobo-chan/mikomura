import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";

const Tag = () => {
  const data = useStaticQuery(graphql`
    query {
      allMicrocmsTag(sort: { fields: tag, order: ASC }) {
        edges {
          node {
            tag
            tagId
            tagSlug
          }
        }
      }
    }
  `);
  const primary = "#546e7a";
  const secondary = "#b0bec5";
  const primaryAfter = "#29434e";
  const text = "#e2f1f8";
  const StyledLink = styled(Link)({
    display: "inline-block",
    padding: "8px 5px",
    backgroundColor: primary,
    color: text,
    borderWidth: "1px 1px 2px 1px",
    borderStyle: "solid",
    borderColor: primary,
    textTransform: "uppercase",
    fontFamily: '"Montserrat", "Noto Sans JP", sans-serif',
    fontSize: ".75em",
    textTransform: "uppercase",
    lineHeight: "1",
    fontWeight: "bold",
    boxShadow: "1px 1px 0 rgba(41, 67, 78, .85)",
    opacity: "1",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    "&:before": {
      content: "''",
      position: "absolute",
      top: "0",
      left: "0",
      height: "50%",
      display: "block",
      width: "100%",
      zIndex: "1",
      transition: "transform .3s cubic-bezier(.65,.05,.1,1)",
      backgroundColor: secondary,
      transform: "translate3d(-105%,0,0)",
    },
    "&:hover:before,&.active:before,&:hover:after,&.active:after": {
      transform: "translate3d(0, 0, 0)",
    },
    "& span": {
      position: "relative",
      zIndex: "2",
    },
    "&:after": {
      content: "''",
      position: "absolute",
      top: "0",
      left: "0",
      height: "50%",
      display: "block",
      width: "100%",
      zIndex: "1",
      transition: "transform .3s cubic-bezier(.65,.05,.1,1)",
      backgroundColor: primaryAfter,
      top: "50%",
      transform: "translate3d(105%,0,0)",
      transitionDelay: "-moz-initial.75ms",
    },
  });
  return (
    <nav className="tag">
      <ul>
        <li>
          <StyledLink
            to={`/blog/`}
            activeClassName={`active`}
          >
            <span>showAll</span>
          </StyledLink>
        </li>
        {data.allMicrocmsTag.edges.map(({ node }) => (
          <li>
            <StyledLink
              to={`/tag/${node.tagSlug}/`}
              activeClassName={`active`}
            >
              <span>{node.tag}</span>
            </StyledLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Tag;
