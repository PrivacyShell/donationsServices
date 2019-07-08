import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import React, { Fragment } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import PictureCont from './PictureCont';
import styled from 'styled-components';
import { Checkbox } from 'antd';


import download from '../shared/assets/download.png';
import logo from '../shared/assets/logo.png';

import Container from '../Projects/Container';
import DashboardHeader from '../Projects/DashboardHeader';
import PictureGrid from './PictureGrid';
import Picture from './Picture';
import Navigation from '../shared/components/Navigation';

const GET_PROJECT = gql`
  query GET_PROJECT($id: ID!) {
    getProject(id: $id) {
      name
      goals {
        id
        dateTime
        proofs {
          id
          name
          description
          image
          dateTime
        }
        expenses {
          id
          amount
          dateTime
          description
        }
      }
    }
  }
`;

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}


const InveStoneHeader = styled.h2`
  text-align: center;
  font-size: 3rem;
  &::before {
    content: '';
    border-bottom: 2px solid #4854A1;
    position: relative;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 30%;
    margin: 5% auto 1% auto;
    display: block;
  }
`;

const GoalContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-around;
  margin: 5% 10%;
 `;

const Title = styled.h3`
  margin: 8% 0 5% 0;
`;

const Goals = styled.div`
  width: 200px;
`;

const Desc = styled.h3`
  font-size: 1.3rem;
  color: #AEADAD;
`;

const CheckBoxes = styled.div`
  display: flex;
  align-items: center;
`;

const Goal = ({ match }) => {
  const { goal, id } = match.params;

  return (
    <Query query={GET_PROJECT} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        const title = data.getProject.name;
        const currentGoal = data.getProject.goals.find(thisGoal => thisGoal.id === goal);
        const { expenses } = currentGoal;
        const sortedExpenses = expenses.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));

        return (
          <Fragment>
            <Navigation title={<img alt="logo" src={logo} />} />
            <Container>
              <DashboardHeader>{data.getProject.name} InveStone</DashboardHeader>
            </Container>
            <Container>
              <h2>Evidence Table and Spend per InveStone</h2>
            </Container>
            <ResponsiveContainer width="96%" height={300} style={{ margin: '0 auto'} }>
              <LineChart data={sortedExpenses}>
                <CartesianGrid />
                <XAxis dataKey="dateTime" />
                <YAxis dataKey="amount" />
                <Tooltip />
                <Line type="monotone" dataKey="amount" stroke="#4854A1" />
              </LineChart>
            </ResponsiveContainer>

            <InveStoneHeader>InveStone 1</InveStoneHeader>

            <GoalContainer>
              <Goals>
                <img src={download} width='150px' alt="Download" />
                <CheckBoxes>
                  <Title>Goal 1</Title>
                  <Checkbox checked={true} style={{margin:'5px 0 0 10%'}} onChange={onChange}></Checkbox>
                </CheckBoxes>
                <Desc>Install first 100 solar panels</Desc>
              </Goals>
              <Goals>
                <img src={download} width='150px' alt="Download" />
                <CheckBoxes>
                  <Title>Goal 2</Title>
                  <Checkbox checked={true} style={{margin:'5px 0 0 10%'}} onChange={onChange}></Checkbox>
                </CheckBoxes>
                <Desc>Dig contract with Nigerian energy company</Desc>
              </Goals>
              <Goals>
                <img src={download} width='150px' alt="Download" />
                <CheckBoxes>
                  <Title>Goal 3</Title>
                  <Checkbox style={{margin:'5px 0 0 10%'}} onChange={onChange}></Checkbox>
                </CheckBoxes>
                <Desc>Provide first 500 terawatts of power</Desc>
              </Goals>
            </GoalContainer>
          
            {/* <PictureGrid>
              {currentGoal.proofs.map(({
                name, description, id, image, dateTime,
              }) => (image ? (
                <PictureCont
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <Picture key={id} className={image}>
                    <h4>{name}</h4>
                    <p>{description}</p>
                  </Picture>
                  <span>{id}</span>
                  <span>{dateTime}</span>
                </PictureCont>
              ) : (
                <Picture key={id}>
                  <h4>{name}</h4>
                  <p>{description}</p>
                  <span>
                    {id}
                    {dateTime}
                  </span>
                  <span>
                    {id}
                    {dateTime}
                  </span>
                </Picture>
              )))}
            </PictureGrid> */}
          </Fragment>
        );
      }}
    </Query>
  );
};

Goal.propTypes = {
  match: PropTypes.object,
};

Goal.defaultProps = {
  match: {},
};

export default Goal;
