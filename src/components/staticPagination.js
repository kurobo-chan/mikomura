import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StaticPagination = (props) => {
  const nextLink = props.pageNextLink;
  const nextTitle = props.pageNextTitle;
  const noNextPage = props.pageNoNext;
  const prevLink = props.pagePrevLink;
  const prevTitle = props.pagePrevTitle;
  const noPrevPage = props.pageNoPrev;
  const PCnav = styled.nav({
    "@media(max-width:767px)": {
      display: "none",
    },
  });
  return (
    <PCnav className="pageNav">
      <Link to={nextLink} className={`next ${noNextPage}`}>
        <span className="controlName">{nextTitle}</span>
        <div className="arrow">
          <div className="arrow-top" />
          <div className="arrow-bottom" />
        </div>
      </Link>
      <Link to={prevLink} className={`prev ${noPrevPage}`}>
        <span className="controlName">{prevTitle}</span>
        <div className="arrow">
          <div className="arrow-top" />
          <div className="arrow-bottom" />
        </div>
      </Link>
    </PCnav>
  );
};
export default StaticPagination;
