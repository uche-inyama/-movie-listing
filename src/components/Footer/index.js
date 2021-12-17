import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  .footer {
    background: #1a242f;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    flex-direction: column;
  }
`

const index = () => {
  return (
    <StyledFooter>
      <div className="footer">
        <div>Movie App</div>
        <div>02021, Movie, Inc. or its affiliates</div>
      </div>
    </StyledFooter>
  );
}

export default index
