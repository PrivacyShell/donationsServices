import styled from 'styled-components';

import Pangolin from '../shared/assets/pangolin.jpg';
import Soccer from '../shared/assets/soccer.jpg';
import Duong2 from '../shared/assets/duong2.jpg';
import Duong3 from '../shared/assets/duong3.jpg';

const Picture = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  height: 20em;
  width: 20em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  border-radius: 2px;

  :after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('https://fillmurray.com/300/300');
    background-size: cover;
    background-position: center;
    opacity: 0.3;
    border-radius: 2px;
  }

  h4 {
    font-weight: bold;
    font-size: 1.8rem;
  }

  &.pangolin:after {
    background-image: url(${Pangolin});
  }

  &.soccer:after {
    background-image: url(${Soccer});
  }

  &.duong2:after {
    background-image: url(${Duong2});
  }

  &.duong3:after {
    background-image: url(${Duong3});
  }
`;

export default Picture;
