import * as React from "react";
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";
import LoadingOverlay from "react-loading-overlay-ts";
import styled from "styled-components";

const primary = "#546e7a";
const StyledLoader = styled(LoadingOverlay)`
  display: none;
  &.MyLoader_wrapper--active {
    display: block;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    z-index: 1000;
  }
`;
const override = css({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});
const LoadingSpinner = () => {
  const [state, setState] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setState(!state);
    }, 2000);
  }, state);
  return (
    <StyledLoader
      active={state}
      styles={{
        wrapper: {},
        overlay: {},
        content: {},
        spinner: {},
      }}
      classNamePrefix="MyLoader_"
      spinner={
        <BarLoader css={override} height={4} width={500} color={primary} />
      }
    />
  );
};
export default LoadingSpinner;
