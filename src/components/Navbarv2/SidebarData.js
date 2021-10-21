import React from 'react';
import {AiOutlineBarChart, AiOutlineProject, AiFillHome } from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import { HiDocumentReport } from "react-icons/hi";
import { ImProfile } from "react-icons/im";

export const SidebarData = [
    {
        title: ' Dashboard',
        path: '//https://app.strateegia.digital/signin',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },

    {
        title: ' Projetos',
        path: '//https://calendar.google.com/',
        icon: <AiOutlineProject />,
        cName: 'nav-text'
    },

    {
        title: ' Relatórios',
        path: '/Desenvolvedores',
        icon: <HiDocumentReport />,
        cName: 'nav-text'
    },

    {
        title: ' Ferramenta de comparação',
        path: '/Desenvolvedores',
        icon: <AiOutlineBarChart />,
        cName: 'nav-text'
    },

    {
        title: ' Meu perfil',
        path: '/Desenvolvedores',
        icon: <ImProfile />,
        cName: 'nav-text'
    },

    {
        title: ' Sair',
        path: '/',
        icon: <FiIcons.FiLogOut />,
        cName: 'nav-text',
        click: '"handleLogout"'
    }
]
