import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';

const Container = styled.div`
  position: relative;  
`;

interface IProps {
    active: string;
    children: React.ReactNode;
}

const Layout = (props: IProps) => {
    return (
        <Container>
            <Header active={props.active}/>
            {props.children}
        </Container>
    );
};

export default Layout;
