import styled from "styled-components";

export const StyledForm = styled.form`
  flex: 1 1 auto;
  margin: 0 auto;
  margin-top: 15%;
  display: block;
  width: 40%;

  label {
    font-weight: bold;
  }

  .form-control {
    margin-bottom: 1%;
  }

  h1 {
    text-align: center;
    font-weight: bold;
  }
`;

export const StyledTitle = styled.h1`
  text-align: center;
  font-weight: bold;
  color: #f8f9fc;
  font-size: 100px;
  position: absolute;
  bottom: 12%;
  color: #d5d5d5;
  letter-spacing: 0.05em;
  text-shadow: 4px 4px 0px #2c2c2c, 7px 7px 0px rgba(0, 0, 0, 0.2);
  margin-left: 7%;
`;