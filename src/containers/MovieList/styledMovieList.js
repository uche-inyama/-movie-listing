import styled from "styled-components";

const StyledList = styled.div`
  .movie-list, .show-list {
    margin: 10px 0px
  }
  .header {
    color: #fff;
    margin-bottom: 10px;
    font-weight: 400;
    padding: 10px;
  }
  .list {
    padding-left: 0;
  }

  .slick-prev {
    left: -20px;
  }

  .slick-next {
    right: -20px;
  }
`

export default StyledList;