import Home from '../components/Home/Home';
import About from '../components/About/About';
import Do from '../components/Do/Do';
import Benefits from '../components/Benefits/Benefits';
import Calendar from '../components/Tutorials/Calendar/Calendar';
import Excel from '../components/Tutorials/Excel/Excel';
import Forms from '../components/Tutorials/Forms/Forms';
import OneNote from '../components/Tutorials/OneNote/OneNote';
import Outlook from '../components/Tutorials/Outlook/Outlook';
import PowerPoint from '../components/Tutorials/PowerPoint/PowerPoint';
//import Skype from '../components/Tutorials/Skype/Skype';
import Sway from '../components/Tutorials/Sway/Sway';
import Teams from '../components/Tutorials/Teams/Teams';
import ToDo from '../components/Tutorials/ToDo/ToDo';
import Word from '../components/Tutorials/Word/Word';

export const repoName = '';

export const homePage = {
        name: 'Office365',
        link: '/',
        objectClass: 'Home',
        pageName: Home,
        hash: `${repoName}/#`,
    };

export const navLinks = [
    {
        name: 'What Is It?',
        link: '/about',
        objectClass: '',
        pageName: About,
        hash: `${repoName}/#`,
    },{
        name: 'What Can It Do?',
        link: '/do',
        objectClass: 'Do',
        pageName: Do,
        hash: `${repoName}/#`,
    },{
        name: 'What are the Benefits?',
        link: '/benefits',
        objectClass: 'Benefits',
        pageName: Benefits,
        hash: `${repoName}/#`,
    }
];

export const dropDown = [
   {
        name: 'Word',
        link: '/word',
        objectClass: 'Word',
        pageName: Word,
        hash: `${repoName}/#`,
    },{
        name: 'Excel',
        link: '/excel',
        objectClass: 'Excel',
        pageName: Excel,
        hash: `${repoName}/#`,
    },{
        name: 'PowerPoint',
        link: '/powerpoint',
        objectClass: 'PowerPoint',
        pageName: PowerPoint,
        hash: `${repoName}/#`,
    },{
        name: 'ToDo',
        link: '/todo',
        objectClass: 'ToDo',
        pageName: ToDo,
        hash: `${repoName}/#`,
    },{
        name: 'Forms',
        link: '/forms',
        objectClass: 'forms',
        pageName: Forms,
        hash: `${repoName}/#`,
    },{
        name: 'OneNote',
        link: '/onenote',
        objectClass: 'OneNote',
        pageName: OneNote,
        hash: `${repoName}/#`,
    },{
        name: 'Outlook',
        link: '/outlook',
        objectClass: 'Outlook',
        pageName: Outlook,
        hash: `${repoName}/#`,
    },{
        name: 'Sway',
        link: '/sway',
        objectClass: 'Sway',
        pageName: Sway,
        hash: `${repoName}/#`,
    },{
        name: 'Teams',
        link: '/teams',
        objectClass: 'Teams',
        pageName: Teams,
        hash: `${repoName}/#`,
    },{
        name: 'Calendar',
        link: '/calendar',
        objectClass: 'Calendar',
        pageName: Calendar,
        hash: `${repoName}/#`,
    }/*,{
        name: 'Skype',
        link: '/skype',
        objectClass: 'Skype',
        pageName: Skype,
        hash: `${repoName}/#`,
    }*/
];
/*
export const socialLinks = [
        /*{
            site: 'Twitter',
            iconClass: 'fa-twitter',
            objectClass: 'fa',
            link: socialMediaLinks.Twitter,
            logoColor: '#55ACEE',
        },*//*{
            site: 'Facebook',
            iconClass: 'fa-facebook',
            objectClass: 'fa',
            link: socialMediaLinks.Facebook,
            logoColor: '#3B5998',
        },{
            site: 'LinkedIn',
            iconClass: 'fa-linkedin',
            objectClass: 'fa',
            link: socialMediaLinks.LinkedIn,
            logoColor: '#ff5700',
        },/*{
            site: 'Pinterest',
            iconClass: 'fa-pinterest',
            objectClass: 'fa',
            link: socialMediaLinks.Pinterest,
            logoColor: '#cb2027',
        },*//*{
            site: 'Instagram',
            iconClass: 'fa-instagram',
            objectClass: 'fa',
            link: socialMediaLinks.Instagram,
            logoColor: '#125688',
        },*//*{
            site: 'YouTube',
            iconClass: 'fa-youtube',
            objectClass: 'fa',
            link: socialMediaLinks.YouTube,
            logoColor: '#bb0000',
        },*//*{
            site: 'GitHub',
            iconClass: 'fa-github',
            objectClass: 'fa',
            link: `https://github.com/MopishHobgoblin`,
            logoColor: '#ffffff',
        },
        {
            site: 'Email',
            iconClass: 'fa-envelope',
            objectClass: 'fa',
            link: `mailto:${about.email}`,
            logoColor: '#00b489',
        },
];*/