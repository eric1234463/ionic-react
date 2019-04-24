// @flow
import React from 'react';
import styled from 'styled-components';
import MembershipIcon from './MembershipIcon';

const Wrapper = styled.div`
  width: 300px;
  height: 100px;
  box-shadow: 10px 30px 15px 0 rgba(0, 0, 0, 0.15);
  background-color: #f5a623;
  color: #fff;
  margin: auto;
  display: flex;
  margin-bottom: 40px;
  > div {
    padding: 8px;
    margin: auto;
    > span {
      display: block;
      text-align: center;
    }
    p {
      text-align: center;
      margin: 0;
      :first-child {
        font-size: 30px;
        padding: 4px 0;
      }

      :last-child {
        font-size: 12px;
      }
    }
    :first-child {
      width: 20%;
    }
    :last-child {
      width: 80%;
    }
  }
`;

const MemberCard = () => (
  <Wrapper>
    <div>
      <MembershipIcon />
      <p>Hello</p>
    </div>
    <div>
      <p>Eric</p>
      <p>Hello</p>
    </div>
  </Wrapper>
)

export default MemberCard;
