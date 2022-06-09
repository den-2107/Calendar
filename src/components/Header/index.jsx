import React from 'react';
import styled from 'styled-components';

const CalendarTitle = styled.div `
    background-color: #B2E1AA;
    display: flex;
    padding: 8px;
    justify-content: center;
`;

const Header = () => {
    return (
        <CalendarTitle></CalendarTitle>
    );
};

export default Header;