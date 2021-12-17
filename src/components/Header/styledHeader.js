import styled from "styled-components";

const StyledHeader = styled.div`
  .header {
    background-color: #1a242f;
    height: 72px;
    padding: 0 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: space-around;
  }

  form {
    .field {
      width: 78%;
      height: 45%;
    }
  }
  
  .logo {
    color: #0f171e;
    font-size: 20px;
    font-weight: 600;
  }

  .userimage {
    padding-left: 85%;
  }

  img {
    width: 40px;
  }
`;

export default StyledHeader;