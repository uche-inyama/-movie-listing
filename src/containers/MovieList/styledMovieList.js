import styled from "styled-components";

const StyledList = styled.div`
  .movie-list, .show-list {
    margin: 20px 0px
    h2 {
      color: #79b8f3;
      margin-bottom: 10px;
      font-weight: 400;
    }
  }
  
  .movie-container, .show-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
  }
`

export default StyledList;