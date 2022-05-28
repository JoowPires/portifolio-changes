import styled from "styled-components";

export const svg = styled.svg`
  width: 100%;
  @-webkit-keyframes svg-text-anim {
    40% {
      stroke-dashoffset: 0;
      fill: transparent;
    }
    60% {
      stroke-dashoffset: 0;
      fill: #0FCCCE;
    }
    100% {
      stroke-dashoffset: 0;
      fill: #0FCCCE;
    }
  }

  @keyframes svg-text-anim {
    40% {
      stroke-dashoffset: 0;
      fill: transparent;
    }
    60% {
      stroke-dashoffset: 0;
      fill: #0FCCCE;
    }
    100% {
      stroke-dashoffset: 0;
      fill: #0FCCCE;
    }
  }

  .style {
    stroke: #000;
    stroke-width: 0.25mn;
    fill: none;
  }

  .svgAnimation {
    width: 100%;
  }
`;
