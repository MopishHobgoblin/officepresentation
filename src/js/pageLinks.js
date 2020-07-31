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
import OneDrive from '../components/Tutorials/OneDrive/OneDrive';

//Import Icons
import wordIcon from '../util/images/wordIcon.png';
import excelIcon from '../util/images/excelIcon.png';
import powerpointIcon from '../util/images/powerpointIcon.png';
import todoIcon from '../util/images/todoIcon.png';
import teamsIcon from '../util/images/teamsIcon.png';
import swayIcon from '../util/images/swayIcon.png';
import skypeIcon from '../util/images/skypeIcon.png';
import outlookIcon from '../util/images/outlookIcon.png';
import onenoteIcon from '../util/images/onenoteIcon.png';
import onedriveIcon from '../util/images/onedriveIcon.png';
import formsIcon from '../util/images/formsIcon.png';
import calendarIcon from '../util/images/calendarIcon.png';
import officeIcon from '../util/images/officeIcon.png';

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

export const dropDown = {
   "word": {
                name: 'Word',
                link: '/word',
                objectClass: 'Word',
                pageName: Word,
                hash: `${repoName}/#`,
                progressURL: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__aFqDCJUNDVMVzNaVkFBVkxUQ044QzAxWUxCME9KQi4u&embed=true",
                progressLink: "/wordquiz",
                progressPage: WordQuiz,
                icon: wordIcon,
                subHeading: "Create documents.",
            },
    "excel": {
                name: 'Excel',
                link: '/excel',
                objectClass: 'Excel',
                pageName: Excel,
                hash: `${repoName}/#`,
                progressURL: "",
                progressLink: "/excelquiz",
                progressPage: "",
                icon: excelIcon,
                subHeading: "",
            },
    "powerpoint": {
                    name: 'PowerPoint',
                    link: '/powerpoint',
                    objectClass: 'PowerPoint',
                    pageName: PowerPoint,
                    hash: `${repoName}/#`,
                    progressURL: "",
                    progressLink: "/powerpointquiz",
                    progressPage: "",
                    icon: powerpointIcon,
                    subHeading: "",
                },
    "todo": {
                name: 'ToDo',
                link: '/todo',
                objectClass: 'ToDo',
                pageName: ToDo,
                hash: `${repoName}/#`,
                progressURL: "",
                progressLink: "/todoquiz",
                progressPage: "",
                icon: todoIcon,
                subHeading: "Keep on track, stay organised.",
            },
    "forms": {
                name: 'Forms',
                link: '/forms',
                objectClass: 'forms',
                pageName: Forms,
                hash: `${repoName}/#`,
                progressURL: "",
                progressLink: "/formsquiz",
                progressPage: "",
                icon: formsIcon,
                subHeading: "",
            },
    "onenote": {
                name: 'OneNote',
                link: '/onenote',
                objectClass: 'OneNote',
                pageName: OneNote,
                hash: `${repoName}/#`,
                progressURL: "",
                progressLink: "/onenotequiz",
                progressPage: "",
                icon: onenoteIcon,
                subHeading: "",
            },
    "outlook": {
                name: 'Outlook',
                link: '/outlook',
                objectClass: 'Outlook',
                pageName: Outlook,
                hash: `${repoName}/#`,
                progressURL: "",
                progressLink: "/outlookquiz",
                progressPage: "",
                icon: outlookIcon,
                subHeading: "",
            },
    "sway": {
                name: 'Sway',
                link: '/sway',
                objectClass: 'Sway',
                pageName: Sway,
                hash: `${repoName}/#`,
                progressURL: "",
                progressLink: "/swayquiz",
                progressPage: "",
                icon: swayIcon,
                subHeading: "",
            },
    "teams": {
                name: 'Teams',
                link: '/teams',
                objectClass: 'Teams',
                pageName: Teams,
                hash: `${repoName}/#`,
                progressURL: "",
                progressLink: "/teamsquiz",
                progressPage: "",
                icon: teamsIcon,
                subHeading: "Work remotely, work together. Work as a Team.",
            },
    "calendar": {
                name: 'Calendar',
                link: '/calendar',
                objectClass: 'Calendar',
                pageName: Calendar,
                hash: `${repoName}/#`,
                progressURL: "",
                progressLink: "/calendarquiz",
                progressPage: "",
                icon: calendarIcon,
                subHeading: "",
            },
    "skype": {
            name: 'Skype',
            link: '/skype',
            objectClass: 'Skype',
            pageName: Skype,
            hash: `${repoName}/#`,
            progressURL: "",
            progressLink: "/skypequiz",
            progressPage: "",
            icon: skypeIcon,
            subHeading: "",
        },
    "onedrive": {
                name: 'OneDrive',
                link: '/onedrive',
                objectClass: 'OneDrive',
                pageName: OneDrive,
                hash: `${repoName}/#`,
                progressURL: "",
                progressLink: "/onedrivequiz",
                progressPage: "",
                icon: onedriveIcon,
                subHeading: "",
            },
};
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

export const homeInfo = {
    "home": {
                 name: 'Office 365',
                 link: '/',
                 objectClass: 'home',
                 pageName: Word,
                 hash: `${repoName}/#`,
                 progressURL: "",
                 progressLink: "",
                 progressPage: "",
                 icon: officeIcon,
                 subHeading: "Everything you need to know about Office 365",
             },
    "about": {
                name: 'What is Office 365?',
                link: '/about',
                objectClass: 'About',
                pageName: About,
                hash: `${repoName}/#`,
                progressURL: "",
                progressLink: "",
                progressPage: "",
                icon: officeIcon,
                subHeading: "An explanation as to what Office 365 is",
            },
    "do": {
                name: 'What can Office 365 do?',
                link: '/do',
                objectClass: 'Do',
                pageName: Do,
                hash: `${repoName}/#`,
                progressURL: "",
                progressLink: "",
                progressPage: "",
                icon: officeIcon,
                subHeading: "Everything that you can do with Office 365",
            },
   "benefits": {
               name: 'Benefits of Office 365?',
               link: '/benefits',
               objectClass: 'Benefits',
               pageName: Benefits,
               hash: `${repoName}/#`,
               progressURL: "",
               progressLink: "",
               progressPage: "",
               icon: officeIcon,
               subHeading: "Why you should be using Office 365",
           },
};