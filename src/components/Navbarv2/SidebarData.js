import React from 'react';
import {AiOutlineBarChart, AiOutlineProject, AiFillHome } from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import { HiDocumentReport } from "react-icons/hi";
import { ImProfile } from "react-icons/im";

export const SidebarData = [
    {
        title: ' Dashboard',
        path: '',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },

    {
        title: ' Projetos',
        path: '/Projetos',
        icon: <AiOutlineProject />,
        cName: 'nav-text'
    },

   /* {
        title: ' Relatórios',
        path: '/Desenvolvedores',
        icon: <HiDocumentReport />,
        cName: 'nav-text'
    }, */

    {
        title: ' Ferramenta de comparação',
        path: '/Comparacao',
        icon: <AiOutlineBarChart />,
        cName: 'nav-text'
    },

   /* {
        title: ' Meu perfil',
        path: '/Desenvolvedores',
        icon: <ImProfile />,
        cName: 'nav-text'
    },*/

    {
        title: ' Sair',
        path: '/',
        icon: <FiIcons.FiLogOut />,
        cName: 'nav-text',
        click: '"handleLogout"'
    }
]
