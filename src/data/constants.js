import login from "../images/login.png";
import calculator from '../images/calculator.png';
import clock from '../images/clock.png';
import drum from '../images/drum.png';
import clone from '../images/usabilityhub.png';
import wave from '../images/wave.png';
import weather from '../images/weather-app.png';


export const skills = [
    {
        id: 1,
        title: 'Frontend',
        _skills: [
        {
            id:'b',
            name: "HTML",
            image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
        },
        {
            id:'c',
            name: "CSS",
            image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
        },
        {
            id:'d',
            name: "JavaScript",
            image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        },
        {
            id:'e',
            name: 'Tailwind',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/640px-Tailwind_CSS_Logo.svg.png',
        },
        ]
    },
    {
        id: 2,
        title: "Programming",
        _skills: [
            {
                id:'a',
                name: "C",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/570px-C_Programming_Language.svg.png?20201031132917",
            },
            {
                id:'b',
                name: "C++",
                image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png",
            },
        ]
    }
    
];

export const projects = [
  {
    id: 11,
    title: "Login and SignUp Page",
    description:
      "login",
    image:
      login,
    tags: [
      "React",
      "HTML",
      "Tailwind",
      "Javascript",
    ],
    link:
    ""
  },
    {
      id: 12,
      title: "WeatherApp",
      description:
        "Developed a weather application utilizing a free weather API to deliver accurate and real-time weather information to users. Implemented user-friendly features such as location-based weather updates.",
      image:
        weather,
      tags: [
        "HTML",
        "Javascript",
        "Tailwind",
        "Weather API",
      ],
      link:
      "https://aaadil123.github.io/Weather_App/"
    },
    {
      id: 13,
      title: "Drum Game",
      description:
      "Created an interactive drum game that generates dynamic drum sounds in response to both keyboard presses and image clicks. Leveraged JavaScript to handle event listeners for keypresses and mouse clicks.",
      image:
        drum,
      tags: [
        "HTML",
        "CSS",
        "Javascript"
      ],
      link:
      "https://aaadil123.github.io/Drum_Game/"
    },
    {
      id: 14,
      title: "Calculator",
      description:
        "Developed a user-friendly, simple calculator application capable of performing basic arithmetic operations. Implemented clean and intuitive user interface design using HTML, CSS, and JavaScript.",
      image:
        calculator,
      tags: [
        "HTML",
        "CSS",
        "Javascript"
      ],
      link:
      "https://aaadil123.github.io/Calculator/"
    },
    {
      id: 15,
      title: "Analog Clock",
      description:
        "Developed an elegant analog clock application that runs continuously, offering users a real-time depiction of the current time. The project showcases smooth clock hand movements. ",
      image:
        clock,
      tags: [
        "HTML",
        "CSS",
        "Javascript",
      ],
      link:
      "https://aaadil123.github.io/Responsive_Clock_using_JavaScript/"
    },
    {
      id: 16,
      title: "Usability Hub Clone",
      description:
        "Designed and built a Usability Hub clone using HTML and CSS, focusing on intuitive user interface, interactive elements, and responsive design. ",
      image:
        clone,
      tags: [
        "HTML",
        "CSS"
      ],
      link:
      "https://aaadil123.github.io/Usability_Hub_Clone/"
    },
  ];
