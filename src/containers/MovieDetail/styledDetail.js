import styled from "styled-components";

const StyledDetail = styled.div`
  .movie-section {
    display: flex;
    justify-content: space-evenly;
    padding: 40px 0px;
    color: #000;
    font-weight: 400;
  }

  .movie-rating {
    padding-left: 3px;
    margin-top: 20px;
    color: #79b8f3;
    display: flex;
    span {
      margin-right: 20px;
    }
  }
  .movie-title {
    font-size: 40px;
    color: #000
  }
  
  .movie-plot {
    margin-top: 20px;
    line-height: 1.8rem;
  }

  .movie-info > div span:first-child {
    padding: 10px 0px;
    color: #000;
    font-weight: 600;
    width: 100px;
    display: inline-block;
  }
`

export default StyledDetail;