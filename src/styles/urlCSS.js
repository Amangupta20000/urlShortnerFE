const urlCSS = () => `
  body {
    margin: 0;
    padding: 0;
    background-color: black;
    height: 100vh;
    background-position: center;
    color: white;
    background-size: cover;
  }
  html {
    font-size: 10px;
  }
  .main-head {
    margin: 50px 0 30px 0;
    color: #42f563;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 4rem;
  }
  .subhead {
    width: 100%;
    background: transparent;
    display: flex;
    justify-content: center;
  }
    .output{
    border: 1px solid grey;
    background: #3e3c3c;
    margin-top: 10px;
    display : inline-block;
    font-size: small;
    -webkit-line-clamp: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    }
    .submitBtn2{
    position:absolute;
    top: 148px;
    }
  .head {
    width: 40%;
    padding: 0px 80px;
    margin: 0px 20px;
    text-align: center !important;
  }
  .api {
    font-size: 3.5rem !important;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: transparent;
  }
  .block {
    position: relative;
    width: 40%;
    padding: 80px;
    margin: 20px;
    background: #060c21f3;
    overflow: hidden;
    box-shadow: 0 0 1rem rgba(255, 255, 255, .01);
  }
  .alignment-error {
    position: relative;
    top: -15px;
  }
  .lightning1, .lightning2, .lightning3, .lightning4 {
    background: #06e3fa;
  }
  .lightning1 {
    position: absolute;
    top: 0px;
    left: 0;
    height: 2px;
    width: 100%;
    transform: translateX(100%);
    animation: animate1 2s linear infinite;
    animation-delay: 1s;
  }
  @keyframes animate1 {
    0% {
      transform: translateX(100%);
    }
    50% {
      transform: translateX(-100%);
    }
    100% {
      transform: translate(-100%);
    }
  }
  .lightning2 {
    position: absolute;
    bottom: 0;
    left: 0px;
    height: 100%;
    width: 2px;
    transform: translateY(100%);
    animation: animate2 2s linear infinite;
    animation-delay: 2s;
  }
  @keyframes animate2 {
    0% {
      transform: translateY(100%);
    }
    50% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(-100%);
    }
  }
  .lightning3 {
    position: absolute;
    top: 0;
    right: 0px;
    height: 100%;
    width: 2px;
    transform: translateY(-100%);
    animation: animate3 3s linear infinite;
    animation-delay: 2s;
  }
  @keyframes animate3 {
    0% {
      transform: translateY(-100%);
    }
    50% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
  .lightning4 {
    position: absolute;
    bottom: 0px;
    right: 0;
    height: 2px;
    width: 100%;
    transform: translateX(-100%);
    transition: all 1s;
    animation: animate4 4s linear infinite;
    animation-delay: 1s;
  }
  @keyframes animate4 {
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translate(100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  .colo {
    background: #42f563;
  }
  form {
    position: relative;
  }
  .form > * {
    padding: 10px;
    margin: 20px;
  }
  .label {
    position: relative;
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
  }
 
  .icon {
    padding: 0;
    margin: 0;
    position: relative;
    bottom: -10px;
    height: 3.5rem;
  }
  .input, .output  {
    outline: none;
    border: none;
    padding: 10px;
    width: 76%;
    border-radius: 5px;
  }
  .input::placeholder {
    text-transform: capitalize;
  }
  
  .submitbut {
    border: 1px solid white;
    outline: none;
    padding: 7px;
    letter-spacing: 1px;
    border-radius: 3px;
    color: white;
    margin-top: 20px;
    background: transparent;
    text-transform: capitalize;
    font-family: "Poppins";
    font-weight: 700;
    font-size: 1.2rem;
    transform: rotate(0deg) translate();
    box-shadow: 0 .4rem 1.5rem black;
    transition: all .2s;
  }
  .blockshade {
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.0) 0%, rgba(255, 255, 255, 0.09) 50%, transparent 50%);
    height: 100%;
    width: 100%;
    pointer-events: none;
  }
  input[type="submit"]:focus {
    background: linear-gradient(25deg, black 0%, black 20%, rgba(255, 255, 255, .35) 50%, black 80%, black 100%);
  }
  .submitbut:hover {
    transform: scale(1.1);
    border: 2px solid white;
    background: linear-gradient(25deg, black 0%, black 20%, rgba(255, 255, 255, .35) 50%, black 80%, black 100%);
  }
  a {
    text-decoration: none;
  }

  /* Mobile Styles */
  @media (max-width: 768px) {
    .main-head {
      font-size: 3rem;
    }
    .head {
      width: 90%;
      padding: 0 20px;
    }
    .api {
      font-size: 2.5rem !important;
    }
    .block {
      width: 90%;
      padding: 40px;
      margin: 10px 0;
    }
    .label {
      font-size: 1.5rem;
    }
    .input, .output  {
      width: 100%;
    }
    .submitbut {
      font-size: 1rem;
      padding: 5px;
    }
      .submitBtn2{
      position: initial;
      }
  }

  @media (max-width: 480px) {
    .main-head {
      font-size: 2.5rem;
    }
    .head {
      width: 100%;
      padding: 0 10px;
    }
    .api {
      font-size: 2rem !important;
    }
    .block {
      padding: 20px;
    }
    .label {
      font-size: 1.2rem;
    }
    .input, .output {
      padding: 8px;
    }
    .submitbut {
      font-size: 0.9rem;
      padding: 4px;
    }
      .submitBtn2{
      position: initial;
      }
  }
`;

export default urlCSS;
