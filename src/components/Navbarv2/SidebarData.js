import React from 'react';
import {
    AiOutlineBarChart,
    AiOutlineProject,
    AiFillHome
} from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import {
    HiDocumentReport
} from "react-icons/hi";
import {
    ImProfile
} from "react-icons/im";
import {
    FiHexagon
} from "react-icons/fi";


export const SidebarData = [

    {
        title: '',
        path: '',
        icon: < FiHexagon size = {
            35
        }
        />,
        cName: 'icon'
    },

    {
        title: ' Dashboard',
        path: '',
        icon: < AiFillHome / > ,
        cName: 'nav-text'
    },

    {
        title: ' Comparações avançadas',
        path: '/Comparacao',
        icon: < AiOutlineBarChart / > ,
        cName: 'nav-text'
    }
    


]