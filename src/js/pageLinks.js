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
import Skype from '../components/Tutorials/Skype/Skype';
import Sway from '../components/Tutorials/Sway/Sway';
import Teams from '../components/Tutorials/Teams/Teams';
import ToDo from '../components/Tutorials/ToDo/ToDo';
import Word from '../components/Tutorials/Word/Word';
import WordQuiz from '../components/Tutorials/Word/WordQuiz';
import wordIcon from '../util/images/wordIcon.png';

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
        progressURL: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__aFqDCJUNDVMVzNaVkFBVkxUQ044QzAxWUxCME9KQi4u&embed=true",
        progressLink: "/wordquiz",
        progressPage: WordQuiz,
        icon: wordIcon,
    },{
        name: 'Excel',
        link: '/excel',
        objectClass: 'Excel',
        pageName: Excel,
        hash: `${repoName}/#`,
        progressURL: "",
        progressLink: "/excelquiz",
        progressPage: "",
        icon: "",
    },{
        name: 'PowerPoint',
        link: '/powerpoint',
        objectClass: 'PowerPoint',
        pageName: PowerPoint,
        hash: `${repoName}/#`,
        progressURL: "",
        progressLink: "/powerpointquiz",
        progressPage: "",
        icon: "",
    },{
        name: 'ToDo',
        link: '/todo',
        objectClass: 'ToDo',
        pageName: ToDo,
        hash: `${repoName}/#`,
        progressURL: "",
        progressLink: "/todoquiz",
        progressPage: "",
        icon: "",
    },{
        name: 'Forms',
        link: '/forms',
        objectClass: 'forms',
        pageName: Forms,
        hash: `${repoName}/#`,
        progressURL: "",
        progressLink: "/formsquiz",
        progressPage: "",
        icon: "",
    },{
        name: 'OneNote',
        link: '/onenote',
        objectClass: 'OneNote',
        pageName: OneNote,
        hash: `${repoName}/#`,
        progressURL: "",
        progressLink: "/onenotequiz",
        progressPage: "",
        icon: "",
    },{
        name: 'Outlook',
        link: '/outlook',
        objectClass: 'Outlook',
        pageName: Outlook,
        hash: `${repoName}/#`,
        progressURL: "",
        progressLink: "/outlookquiz",
        progressPage: "",
        icon: "",
    },{
        name: 'Sway',
        link: '/sway',
        objectClass: 'Sway',
        pageName: Sway,
        hash: `${repoName}/#`,
        progressURL: "",
        progressLink: "/swayquiz",
        progressPage: "",
        icon: "",
    },{
        name: 'Teams',
        link: '/teams',
        objectClass: 'Teams',
        pageName: Teams,
        hash: `${repoName}/#`,
        progressURL: "",
        progressLink: "/teamsquiz",
        progressPage: "",
        icon: "",
    },{
        name: 'Calendar',
        link: '/calendar',
        objectClass: 'Calendar',
        pageName: Calendar,
        hash: `${repoName}/#`,
        progressURL: "",
        progressLink: "/calendarquiz",
        progressPage: "",
        icon: "",
    },{
        name: 'Skype',
        link: '/skype',
        objectClass: 'Skype',
        pageName: Skype,
        hash: `${repoName}/#`,
        progressURL: "",
        progressLink: "/skypequiz",
        progressPage: "",
        icon: "",
    }
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