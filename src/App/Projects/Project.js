import styled from 'styled-components';

import solar from '../shared/assets/solar.png';
import mawugu from '../shared/assets/mawugu.png';
import amakon from '../shared/assets/amakon.png';
import agricred from '../shared/assets/agricred.png';
import deliverla from '../shared/assets/deliverla.png';

const Project = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 450px;
  background-color: #fff;
  position: relative;
  text-align: center;
  transition: 200ms;
  border-radius: 5px;
  margin: 5%;

  :after {
    background-position: center center;
    background-repeat: no-repeat;
    top: -27%;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
  }

  &.solar:after {
    background-image: url(${solar});
  }
  &.mawugu:after {
    background-image: url(${mawugu});
  }
  &.amakon:after {
    background-image: url(${amakon});
  }
  &.agricred:after {
    background-image: url(${agricred});
  }
  &.deliverla:after {
    background-image: url(${deliverla});
  }

  :hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

export default Project;
