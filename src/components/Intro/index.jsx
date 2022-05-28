// import * as S from './styles.jsx'
import * as S from "./styles.jsx";
import { useEffect } from "react";

function setTextAnimation(
  delay,
  duration,
  strokeWidth,
  timingFunction,
  strokeColor,
  repeat
) {
  let paths = document.querySelectorAll("path");
  let mode = repeat ? "infinite" : "forwards";
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    const length = path.getTotalLength();
    path.style["stroke-dashoffset"] = `${length}px`;
    path.style["stroke-dasharray"] = `${length}px`;
    path.style["stroke-width"] = `${strokeWidth}px`;
    path.style["stroke"] = `${strokeColor}`;
    path.style[
      "animation"
    ] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
    path.style["animation-delay"] = `${i * delay}s`;
  }
}

export function Intro() {
  useEffect(() => {
    setTextAnimation(0.2, 1, 0.4, "ease-in", "#0FCCCE", false);
  }, []);

  return (
    <S.svg
      className="svgAnimation"
      width="995.851"
      height="111.752"
      viewBox="0 0 995.851 111.752"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="svgGroup"
        strokeLinecap="round"
        fillRule="evenodd"
        fontSize="9pt"
        className="style"
      >
        <path
          d="M 0 104.851 L 6.75 89.401 A 19.395 19.395 0 0 0 10.194 92.586 A 16.59 16.59 0 0 0 12.825 94.126 Q 15.752 95.492 19.863 95.673 A 29.204 29.204 0 0 0 21.15 95.701 A 21.457 21.457 0 0 0 24.134 95.506 Q 25.705 95.285 27.002 94.814 A 10.306 10.306 0 0 0 28.65 94.051 Q 31.055 92.659 32.445 89.344 A 17.134 17.134 0 0 0 32.925 88.051 A 22.688 22.688 0 0 0 33.676 84.966 Q 34.255 81.704 34.337 77.132 A 86.038 86.038 0 0 0 34.35 75.601 L 34.35 0.001 L 51 0.001 L 51 79.801 A 58.96 58.96 0 0 1 50.401 88.521 Q 49.731 92.988 48.312 96.543 A 22.34 22.34 0 0 1 43.425 104.176 A 25.455 25.455 0 0 1 28.705 111.389 A 35.413 35.413 0 0 1 23.55 111.751 Q 17.25 111.751 10.8 110.176 A 28.812 28.812 0 0 1 4.875 108.057 A 23.007 23.007 0 0 1 0 104.851 Z"
          id="0"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 95.569 110.315 A 40.232 40.232 0 0 0 106.5 111.751 A 43.722 43.722 0 0 0 111.356 111.487 A 34.902 34.902 0 0 0 125.325 106.951 Q 133.5 102.151 138 93.901 A 36.068 36.068 0 0 0 140.373 88.569 A 38.872 38.872 0 0 0 142.5 75.601 A 43.958 43.958 0 0 0 142.496 74.984 A 37.652 37.652 0 0 0 138.075 57.451 Q 133.65 49.201 125.475 44.401 Q 117.3 39.601 106.5 39.601 Q 95.7 39.601 87.45 44.401 Q 79.2 49.201 74.775 57.451 A 36.855 36.855 0 0 0 73.16 60.871 A 38.391 38.391 0 0 0 70.35 75.601 A 44.067 44.067 0 0 0 70.372 77.005 A 37.248 37.248 0 0 0 74.85 93.901 Q 79.35 102.151 87.6 106.951 A 34.163 34.163 0 0 0 95.569 110.315 Z M 106.95 98.551 A 18.823 18.823 0 0 0 113.356 97.507 A 16.046 16.046 0 0 0 120.675 92.101 A 23.351 23.351 0 0 0 125.159 81.944 A 32.311 32.311 0 0 0 125.7 75.901 A 29.128 29.128 0 0 0 124.61 67.762 A 23.389 23.389 0 0 0 120.3 59.476 A 17.213 17.213 0 0 0 107.812 52.87 A 22.159 22.159 0 0 0 106.05 52.801 Q 97.5 52.801 92.325 59.401 Q 87.15 66.001 87.15 75.901 A 27.429 27.429 0 0 0 88.285 83.954 A 22.466 22.466 0 0 0 92.7 92.026 A 17.718 17.718 0 0 0 105.593 98.51 A 22.252 22.252 0 0 0 106.95 98.551 Z"
          id="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 159.75 110.251 L 159.75 41.401 L 175.65 41.401 L 175.8 54.001 A 24.006 24.006 0 0 1 184.044 44.166 A 28.806 28.806 0 0 1 184.8 43.651 A 24.569 24.569 0 0 1 195.813 39.781 A 31.126 31.126 0 0 1 199.2 39.601 A 41.191 41.191 0 0 1 205.373 40.033 Q 208.6 40.523 211.205 41.57 A 17.942 17.942 0 0 1 215.55 44.026 Q 221.25 48.451 223.2 56.401 A 57.078 57.078 0 0 1 224.31 62.434 Q 224.73 65.584 224.94 69.251 A 137.735 137.735 0 0 1 225.15 77.101 L 225.15 110.251 L 208.95 110.251 L 208.95 77.551 Q 208.95 67.244 207.359 61.475 A 19.955 19.955 0 0 0 206.4 58.726 Q 203.872 53 196.035 52.951 A 21.702 21.702 0 0 0 195.9 52.951 A 15.993 15.993 0 0 0 190.252 54.022 A 21.778 21.778 0 0 0 186.75 55.726 Q 182.1 58.501 179.025 63.751 A 22.249 22.249 0 0 0 176.25 71.821 A 28.856 28.856 0 0 0 175.95 76.051 L 175.95 110.251 L 159.75 110.251 Z"
          id="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 300.75 52.951 L 301.05 41.401 L 316.5 41.401 L 316.5 110.251 L 301.2 110.251 L 300.9 98.101 Q 298.669 102.826 293.222 106.575 A 35.639 35.639 0 0 1 291.6 107.626 A 28.307 28.307 0 0 1 277.234 111.742 A 33.749 33.749 0 0 1 276.45 111.751 Q 267.15 111.751 259.275 107.326 Q 251.4 102.901 246.675 94.726 A 34.946 34.946 0 0 1 242.411 82.174 A 45.337 45.337 0 0 1 241.95 75.601 A 47.911 47.911 0 0 1 242.856 66.069 A 36.537 36.537 0 0 1 246.075 56.701 Q 250.2 48.601 257.85 44.101 A 32.303 32.303 0 0 1 269.497 40.063 A 42.265 42.265 0 0 1 275.85 39.601 A 30.334 30.334 0 0 1 285.692 41.18 A 28.646 28.646 0 0 1 287.1 41.701 A 36.217 36.217 0 0 1 291.937 44.045 A 27.638 27.638 0 0 1 295.95 46.876 A 24.314 24.314 0 0 1 298.131 48.969 Q 299.159 50.097 299.859 51.215 A 10.921 10.921 0 0 1 300.75 52.951 Z M 299.4 76.801 L 299.4 75.751 A 26.393 26.393 0 0 0 298.546 68.922 A 22.398 22.398 0 0 0 296.7 64.201 A 20.638 20.638 0 0 0 291.683 57.924 A 19.721 19.721 0 0 0 289.35 56.251 Q 284.7 53.401 279.15 53.401 A 23.691 23.691 0 0 0 272.938 54.17 A 16.759 16.759 0 0 0 264.3 59.626 A 21.746 21.746 0 0 0 259.67 69.379 A 31.13 31.13 0 0 0 259.05 75.751 Q 259.05 85.605 264.025 91.781 A 20.375 20.375 0 0 0 264.225 92.026 Q 269.4 98.251 279.15 98.251 Q 287.7 98.251 293.55 92.326 A 19.983 19.983 0 0 0 299.11 80.894 A 27.884 27.884 0 0 0 299.4 76.801 Z"
          id="3"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 344.25 110.251 L 344.25 54.601 L 332.1 54.601 L 332.1 41.401 L 344.25 41.401 L 344.25 13.351 L 360.6 9.751 L 360.6 41.401 L 376.5 41.401 L 376.5 54.601 L 360.6 54.601 L 360.6 110.251 L 344.25 110.251 Z"
          id="4"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 390.45 110.251 L 390.45 0.001 L 406.2 0.001 L 406.2 41.401 L 405.6 54.151 A 23.896 23.896 0 0 1 413.206 44.808 A 29.332 29.332 0 0 1 414.75 43.726 A 25.256 25.256 0 0 1 426.124 39.771 A 31.813 31.813 0 0 1 429.45 39.601 A 41.191 41.191 0 0 1 435.623 40.033 Q 438.85 40.523 441.455 41.57 A 17.942 17.942 0 0 1 445.8 44.026 Q 451.5 48.451 453.45 56.401 A 57.078 57.078 0 0 1 454.56 62.434 Q 454.98 65.584 455.19 69.251 A 137.735 137.735 0 0 1 455.4 77.101 L 455.4 110.251 L 439.35 110.251 L 439.35 76.951 A 125.874 125.874 0 0 0 439.255 71.88 Q 439.067 67.25 438.511 64.039 A 32.617 32.617 0 0 0 438.375 63.301 A 17.437 17.437 0 0 0 437.422 60.053 Q 436.349 57.435 434.475 55.801 A 9.426 9.426 0 0 0 431.156 53.971 Q 428.948 53.251 426 53.251 A 16.267 16.267 0 0 0 420.061 54.414 A 21.613 21.613 0 0 0 416.925 55.951 Q 412.35 58.651 409.35 63.826 A 21.969 21.969 0 0 0 406.704 71.426 A 29.083 29.083 0 0 0 406.35 76.051 L 406.35 110.251 L 390.45 110.251 Z"
          id="5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 530.7 52.951 L 531 41.401 L 546.45 41.401 L 546.45 110.251 L 531.15 110.251 L 530.85 98.101 Q 528.619 102.826 523.172 106.575 A 35.639 35.639 0 0 1 521.55 107.626 A 28.307 28.307 0 0 1 507.184 111.742 A 33.749 33.749 0 0 1 506.4 111.751 Q 497.1 111.751 489.225 107.326 Q 481.35 102.901 476.625 94.726 A 34.946 34.946 0 0 1 472.361 82.174 A 45.337 45.337 0 0 1 471.9 75.601 A 47.911 47.911 0 0 1 472.806 66.069 A 36.537 36.537 0 0 1 476.025 56.701 Q 480.15 48.601 487.8 44.101 A 32.303 32.303 0 0 1 499.447 40.063 A 42.265 42.265 0 0 1 505.8 39.601 A 30.334 30.334 0 0 1 515.642 41.18 A 28.646 28.646 0 0 1 517.05 41.701 A 36.217 36.217 0 0 1 521.887 44.045 A 27.638 27.638 0 0 1 525.9 46.876 A 24.314 24.314 0 0 1 528.081 48.969 Q 529.109 50.097 529.809 51.215 A 10.921 10.921 0 0 1 530.7 52.951 Z M 529.35 76.801 L 529.35 75.751 A 26.393 26.393 0 0 0 528.496 68.922 A 22.398 22.398 0 0 0 526.65 64.201 A 20.638 20.638 0 0 0 521.633 57.924 A 19.721 19.721 0 0 0 519.3 56.251 Q 514.65 53.401 509.1 53.401 A 23.691 23.691 0 0 0 502.888 54.17 A 16.759 16.759 0 0 0 494.25 59.626 A 21.746 21.746 0 0 0 489.62 69.379 A 31.13 31.13 0 0 0 489 75.751 Q 489 85.605 493.975 91.781 A 20.375 20.375 0 0 0 494.175 92.026 Q 499.35 98.251 509.1 98.251 Q 517.65 98.251 523.5 92.326 A 19.983 19.983 0 0 0 529.06 80.894 A 27.884 27.884 0 0 0 529.35 76.801 Z"
          id="6"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 568.2 110.251 L 568.2 41.401 L 584.1 41.401 L 584.25 54.001 A 24.006 24.006 0 0 1 592.494 44.166 A 28.806 28.806 0 0 1 593.25 43.651 A 24.569 24.569 0 0 1 604.263 39.781 A 31.126 31.126 0 0 1 607.65 39.601 A 41.191 41.191 0 0 1 613.823 40.033 Q 617.05 40.523 619.655 41.57 A 17.942 17.942 0 0 1 624 44.026 Q 629.7 48.451 631.65 56.401 A 57.078 57.078 0 0 1 632.76 62.434 Q 633.18 65.584 633.39 69.251 A 137.735 137.735 0 0 1 633.6 77.101 L 633.6 110.251 L 617.4 110.251 L 617.4 77.551 Q 617.4 67.244 615.809 61.475 A 19.955 19.955 0 0 0 614.85 58.726 Q 612.322 53 604.485 52.951 A 21.702 21.702 0 0 0 604.35 52.951 A 15.993 15.993 0 0 0 598.702 54.022 A 21.778 21.778 0 0 0 595.2 55.726 Q 590.55 58.501 587.475 63.751 A 22.249 22.249 0 0 0 584.7 71.821 A 28.856 28.856 0 0 0 584.4 76.051 L 584.4 110.251 L 568.2 110.251 Z"
          id="7"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 692.25 110.251 L 692.25 0.001 L 716.55 0.001 A 76.531 76.531 0 0 1 727.237 0.695 Q 732.724 1.471 737.121 3.115 A 28.631 28.631 0 0 1 746.625 8.776 A 28.881 28.881 0 0 1 755.517 25.396 A 41.99 41.99 0 0 1 756.15 32.851 A 48.549 48.549 0 0 1 755.036 43.578 Q 753.324 51.133 748.985 56.594 A 29.264 29.264 0 0 1 745.8 60.001 A 32.698 32.698 0 0 1 734.006 66.745 Q 725.967 69.451 715.05 69.451 L 709.2 69.451 L 709.2 110.251 L 692.25 110.251 Z M 709.2 54.601 L 715.5 54.601 Q 728.7 54.601 733.95 48.751 A 20.364 20.364 0 0 0 739.2 34.715 A 25.92 25.92 0 0 0 739.2 34.651 A 25.104 25.104 0 0 0 738.422 28.241 A 18.625 18.625 0 0 0 734.1 20.251 A 14.884 14.884 0 0 0 728.569 16.556 Q 723.938 14.701 717 14.701 L 709.2 14.701 L 709.2 54.601 Z"
          id="9"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 771.9 110.251 L 771.9 41.401 L 788.7 41.401 L 788.7 110.251 L 771.9 110.251 Z M 780.15 28.501 Q 775.5 28.501 772.35 25.351 A 10.569 10.569 0 0 1 769.201 17.696 A 13.623 13.623 0 0 1 769.2 17.551 A 9.549 9.549 0 0 1 772.144 10.552 A 12.241 12.241 0 0 1 772.35 10.351 A 10.773 10.773 0 0 1 779.646 7.36 A 14.044 14.044 0 0 1 780.15 7.351 Q 784.65 7.351 787.8 10.351 Q 790.95 13.351 790.95 17.551 A 11.583 11.583 0 0 1 790.205 21.765 A 10.551 10.551 0 0 1 787.875 25.351 Q 784.8 28.501 780.15 28.501 Z"
          id="10"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 810.75 110.251 L 810.75 41.401 L 826.95 41.401 L 826.95 54.901 A 24.463 24.463 0 0 1 831.222 47.209 A 22.703 22.703 0 0 1 834.75 43.801 Q 840.15 39.601 847.05 39.601 A 40.41 40.41 0 0 1 849.199 39.654 Q 852.269 39.818 853.635 40.493 A 3.772 3.772 0 0 1 853.65 40.501 L 851.4 56.851 Q 850.148 56.016 846.186 55.956 A 41.656 41.656 0 0 0 845.55 55.951 Q 838.5 55.951 832.725 60.451 A 14.043 14.043 0 0 0 827.978 67.459 Q 827.208 69.867 827.015 72.815 A 31.136 31.136 0 0 0 826.95 74.851 L 826.95 110.251 L 810.75 110.251 Z"
          id="11"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 927.45 81.451 L 877.95 81.451 A 33.907 33.907 0 0 0 879.286 86.642 Q 880.2 89.25 881.497 91.253 A 14.923 14.923 0 0 0 884.475 94.651 Q 888.588 98.068 895.425 98.602 A 33.732 33.732 0 0 0 898.05 98.701 A 71.609 71.609 0 0 0 902.699 98.559 Q 906.848 98.289 909.9 97.501 A 39.14 39.14 0 0 0 916.453 95.195 A 34.924 34.924 0 0 0 918.45 94.201 L 923.4 105.751 Q 920.675 107.495 916.525 108.922 A 59.062 59.062 0 0 1 913.2 109.951 A 44.607 44.607 0 0 1 907.277 111.149 Q 904.261 111.563 900.818 111.692 A 85.817 85.817 0 0 1 897.6 111.751 A 51.42 51.42 0 0 1 888.609 111.007 Q 883.404 110.082 879.154 108.008 A 30.01 30.01 0 0 1 877.05 106.876 A 30.928 30.928 0 0 1 868.011 98.946 A 29.358 29.358 0 0 1 864.9 93.826 Q 861 85.651 861 75.901 A 44.342 44.342 0 0 1 862.108 65.776 A 35.104 35.104 0 0 1 865.575 56.701 Q 870.15 48.451 878.25 44.026 Q 886.35 39.601 896.55 39.601 A 45.722 45.722 0 0 1 905.48 40.416 Q 914.804 42.275 920.175 48.376 A 28.89 28.89 0 0 1 926.088 59.32 Q 927.39 63.654 927.757 68.851 A 59.749 59.749 0 0 1 927.9 73.051 A 79.928 79.928 0 0 1 927.603 79.83 A 89.775 89.775 0 0 1 927.45 81.451 Z M 877.95 70.201 L 912.15 70.201 A 39.37 39.37 0 0 0 912.155 69.566 Q 912.155 60.769 908.1 57.076 Q 903.9 53.251 896.1 53.251 A 21.384 21.384 0 0 0 888.687 54.443 Q 879.714 57.745 877.95 70.201 Z"
          id="12"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 942.6 105.451 L 948 92.701 A 34.94 34.94 0 0 0 968.46 99.001 A 42.353 42.353 0 0 0 968.55 99.001 A 29.541 29.541 0 0 0 972.475 98.764 Q 980.1 97.735 980.1 92.251 Q 980.1 89.251 977.7 87.601 A 16.129 16.129 0 0 0 976.16 86.682 Q 973.666 85.353 969.15 83.701 L 963.45 81.601 Q 955.973 78.61 951.084 74.636 A 31.038 31.038 0 0 1 949.2 72.976 A 16.755 16.755 0 0 1 944.135 62.681 A 23.332 23.332 0 0 1 943.95 59.701 A 19.197 19.197 0 0 1 945.175 52.704 Q 946.91 48.232 951.102 45.125 A 21.508 21.508 0 0 1 951.375 44.926 Q 957.604 40.459 967.368 39.739 A 52.825 52.825 0 0 1 971.25 39.601 Q 977.4 39.601 983.325 40.951 Q 989.25 42.301 992.4 44.401 L 986.55 57.301 Q 984.681 55.432 980.677 54.046 A 32.007 32.007 0 0 0 980.325 53.926 A 27.526 27.526 0 0 0 974.6 52.701 A 34.944 34.944 0 0 0 970.8 52.501 Q 963.756 52.501 961.371 55.322 A 5.426 5.426 0 0 0 960.15 58.951 Q 960.15 62.533 962.972 64.408 A 7.719 7.719 0 0 0 963 64.426 Q 965.21 65.88 969.584 67.559 A 93.778 93.778 0 0 0 972.3 68.551 A 5.929 5.929 0 0 1 972.646 68.655 Q 973.659 68.982 976.95 70.201 A 62.196 62.196 0 0 1 982.717 72.775 Q 988.076 75.526 991.2 78.751 A 16.314 16.314 0 0 1 995.713 88.553 A 22.13 22.13 0 0 1 995.85 91.051 Q 995.85 101.251 988.125 106.501 Q 980.4 111.751 968.55 111.751 A 60.88 60.88 0 0 1 957.455 110.696 A 71.213 71.213 0 0 1 953.625 109.876 Q 947.013 108.271 943.643 106.172 A 12.601 12.601 0 0 1 942.6 105.451 Z"
          id="13"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </S.svg>
  );
}
