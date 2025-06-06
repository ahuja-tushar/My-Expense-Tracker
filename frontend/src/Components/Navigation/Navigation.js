import React from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'
import { useGlobalContext } from '../../context/globalContext'

function Navigation({active, setActive}) {

    const { signOutUser, setError, name } = useGlobalContext();

    const handleSignOut = async (event) => {
        event.preventDefault();
        setError(null); // Reset error before new request
        await signOutUser();
      };
    
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>{name}</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav" onClick={handleSignOut}>
        <span>
          {signout} Sign Out
        </span>
      </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: #1d1d1d;
    border: 3px solid rgb(49, 48, 48);
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: rgb(255, 255, 255);
        }
        p{
            color: rgb(255, 255, 255);
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgb(255, 255, 255);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgb(255, 255, 255);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }
      .bottom-nav {
    cursor: pointer;
    span {
      display: flex;
      align-items: center;
      i {
        margin-right: 0.5rem;
      }
    }

    &:hover {
      color: black;
    }
  }

    .active{
        color: rgb(255, 255, 255) !important;
        i{
            color: rgb(255, 255, 255) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background:rgb(250, 250, 250);
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation