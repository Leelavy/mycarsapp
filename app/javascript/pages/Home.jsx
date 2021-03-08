import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Logo from '../../assets/images/drivebox-logo.svg'
import CustomizedSelect from '../components/CustomizedSelect';
import CarDriverToggle from '../components/CarDriverToggle';
import CustomizedTable from '../components/CustomizedTable';
import { getSelectCars, getCarDrivers } from '../api/carsApi';
import { getSelectDrivers, getDriverCars } from '../api/driversApi';
import { pageAnimationFromBottom } from '../styles/animations';

const Home = () => {
  const [carDriverToggle, setCarDriverToggle] = useState('car');
  const [selectMenuItems, setSelectMenuItems] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (carDriverToggle === 'driver') {
      sendRequest(getSelectDrivers);
    } else if (carDriverToggle === 'car') {
      sendRequest(getSelectCars);
    }
  }, [carDriverToggle]);

  const handleSelect = (item) => {
    if (carDriverToggle === 'driver') {
      getDriverCars(item.id)
        .then(resp => {
          setTableData(resp.data.joined);
        })
        .catch(resp => console.log(resp))
    } else if (carDriverToggle === 'car') {
      getCarDrivers(item.id)
        .then(resp => {
          setTableData(resp.data.joined);
        })
        .catch(resp => console.log(resp))
    }
  }

  const sendRequest = async (action) => {
    try {
      const resp = await action();
      setSelectMenuItems(resp.data.selected);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledContainer
      variants={pageAnimationFromBottom}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledLogo src={Logo} alt="logo" />
      <StyledSelectDiv>
        <CustomizedSelect
          onSelect={handleSelect}
          menuItems={selectMenuItems}
          subject={carDriverToggle}
        />
        <CarDriverToggle
          carDriverToggle={carDriverToggle}
          setCarDriverToggle={setCarDriverToggle}
        />
      </StyledSelectDiv>
      {selectMenuItems.length && (
        <CustomizedTable tableData={tableData} />
      )}
    </StyledContainer>
  );
}

const StyledContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

const StyledLogo = styled(motion.img)`
  margin-top: 2rem;
  max-width: 600px;
`;

const StyledSelectDiv = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
`;

export default Home;