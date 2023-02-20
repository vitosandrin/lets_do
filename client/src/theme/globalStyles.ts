import { createGlobalStyle } from "styled-components";

export const ResetCss = createGlobalStyle`
  html,
  body {
    height: 200%
    animation: fadeIn 0.7s both;
    color: ${({ theme }) => theme.font.colors.pure};
    background-color: ${({ theme }) => theme.colors.background[2]};
    padding: 0;
    margin: 0;
    @media (max-width: ${({ theme }) => theme?.breakpoints?.xsm}) {
      font-size: 80%;
    }
  
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: transparent;
    border-radius: 10px;
  }
  ::-webkit-scrollbar {
    width: 2px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
