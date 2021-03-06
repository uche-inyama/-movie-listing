import styled from "styled-components";

const StyledDetail = styled.div`
  width: 80%;
  margin: 0 auto;
    .movie-section {
      display: grid;
      grid-template-columns: 3fr 1fr;
      grid-gap: 40px;
      padding: 40px 0px;
      color: #fff;
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
      color: #fff
    }
    
    .movie-plot {
      margin-top: 20px;
      line-height: 1.8rem;
    }

    .movie-info > div span:first-child {
      padding: 10px 0px;
      color: #fff;
      font-weight: 600;
      width: 100px;
      display: inline-block;
    }
    
    .movie-info > div span {
      color: #79b8f3;
    }

    .fa-star { color: #ff9e00 }

    .fa-thumbs-up{ color: #fafafa }

    .fa-film { color: rgb(191, 213, 214)}

    .fa-calender { color: peachpuff }

    .section-right {
      margin-left: 30px;
    }
`

export default StyledDetail;