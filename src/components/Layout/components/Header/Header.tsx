import React from 'react';
import { HeaderContainer, Logo,
    MainLinksContainer, HeaderLink,
    RightContainer, SignInButton } from './HeaderElements';
import { ReactComponent as SvgFavoriteEmpty } from '../../../../shared/favorite-empty.svg';
import { ReactComponent as SvgFavoriteFilled } from '../../../../shared/favorite-filled.svg';
import { Link } from 'react-router-dom';

interface HeaderProps {
    active: string;
}

const Header = (props: HeaderProps) => {
    const links = ['Home', 'Tours', 'About', 'Help'];

    return (
        <HeaderContainer>
            <Link to="/">
                <Logo src="./spacex-logo.svg" alt=""/>
            </Link>
            <MainLinksContainer>
                {
                    links.map(link => {
                        return (
                            <HeaderLink
                                to={link === "Home" ? "/" : ""}
                                $isActive={props.active === link} key={link}>{link}</HeaderLink>
                        );
                    })
                }
            </MainLinksContainer>
            <RightContainer>
                <HeaderLink to="/favorites">
                    {
                        props.active === 'Favorites' ?
                            <SvgFavoriteFilled/>
                            :
                            <SvgFavoriteEmpty/>
                    }
                </HeaderLink>
                <SignInButton to="">
                    Sign In
                </SignInButton>
            </RightContainer>
        </HeaderContainer>
    );
};

export default Header;
