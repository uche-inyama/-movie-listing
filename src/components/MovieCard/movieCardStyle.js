import styled from "styled-components";

const StyledCard = styled.div`
  a {
    text-decoration: none;
  }
  .card-item {
    background: #1a242f;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.04);
      transition: all 0.3s;
    }
  }

  .card-top {
    height: 350px;
    img {
      width: 100%;
      height: 100%
    }
  }

  .card-bottom {
    padding: 20px;
    height: 100px;
  }

  .card-info {
    color: #fff;
    height: 100%;
    h4 {
      font-size: 22px;
      font-weight: 400;
      margin: 10px 0;
      height: 40%;
    }
    p {
      height: 30%;
      margin: 0px;
      position: relative;
      top: 25%;
    }
  }
`;

export default StyledCard;