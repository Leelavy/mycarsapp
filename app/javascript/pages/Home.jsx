import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Logo from '../../assets/images/motorino-logo.svg'
import CustomizedSelect from '../components/CustomizedSelect';
import CarDriverToggle from '../components/CarDriverToggle';
import CustomizedTable from '../components/CustomizedTable';
import { getSelectCars, getCarDrivers } from '../api/carsApi';
import { getSelectDrivers, getDriverCars } from '../api/driversApi';

const Home = () => {
  const [carDriverToggle, setCarDriverToggle] = useState('car');
  const [selectMenuItems, setSelectMenuItems] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (carDriverToggle === 'driver') {
      sendRequest(getSelectDrivers);
    } else if (carDriverToggle === 'car') {
      sendRequest(getSelectCars);
    }
  }, [carDriverToggle]);

  useEffect(() => {
    return selectMenuItems.length ? setIsDisabled(false) : setIsDisabled(true);
  }, [selectMenuItems])

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
    <StyledContainer>
      <StyledLogo src={Logo} alt="logo" />
      <StyledSelectDiv>
        <CustomizedSelect
          onSelect={handleSelect}
          menuItems={selectMenuItems}
          subject={carDriverToggle}
          isDisabled={isDisabled}
        />
        <CarDriverToggle
          carDriverToggle={carDriverToggle}
          setCarDriverToggle={setCarDriverToggle}
          isDisabled={isDisabled}
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