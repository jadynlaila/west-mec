import React from 'react';
import Home from '../Pages/Home';
import Calendar from '../Pages/Calendar';
import Documents from '../Pages/Documents';
import Error from '../Pages/Error';
import Projects from '../Pages/Projects';
import Team from '../Pages/Team';

import{
    FaBehance, 
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaSketch,
    FaHome,
    FaUserFriends,
    FaFolderOpen,
    FaCalendarAlt,
    FaWpforms
}
from 'react-icons/fa'


export const links = [
    {
        id: 1,
        url:'/',
        text: 'Home',
        icon: <FaHome />,
        page: <Home />
    },
    {
        id: 2,
        url:'/team',
        text: 'Team',
        icon: <FaUserFriends />,
        page: <Team />
    },
    {
        id: 3,
        url:'/projects',
        text: 'Projects',
        icon: <FaFolderOpen />,
        page: <Projects />
    },
    {
        id: 4,
        url:'/calendar',
        text: 'Calendar',
        icon: <FaCalendarAlt />,
        page: <Calendar />
    },
    {
        id: 5,
        url:'/Documents',
        text: 'Documents',
        icon: <FaWpforms />,
        page: <Documents />
    },
    {
        id: 6,
        url:'*',
        text: 'Error',
        icon: null,
        page: <Error />
    },
]

export const socials = [
    {
        id: 1,
        url: 'https://www.twitter.com',
        icon: <FaFacebook />
    },
    {
        id: 2,
        url: 'https://www.twitter.com',
        icon: <FaTwitter />
    },
    {
        id: 3,
        url: 'https://www.twitter.com',
        icon: <FaLinkedin />
    },
    {
        id: 4,
        url: 'https://www.twitter.com',
        icon: <FaBehance />
    },
    {
        id: 5,
        url: 'https://www.twitter.com',
        icon: <FaSketch />
    },
]