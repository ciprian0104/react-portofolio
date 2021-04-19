/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Ciprian Serac",
  title: "Hello, I'm Ciprian",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having experience in building Web and Mobile applications with JavaScript, Python, and Java and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1omQU-FepFd8hAg_ndPV4yNU7jL6E_Chw/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ciprian0104",
  linkedin: "https://www.linkedin.com/in/ciprian0104/",
  gmail: "serac.ciprian0104@gmail.com",
 
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase & AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "android-studio",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Politehnica University Of Timisoara",
      logo: require("./assets/images/poli_tm.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2017 - June 2020",
      desc:
      "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems",
    },
    {
      schoolName: "deeplearning.ai",
      logo: require("./assets/images/deeplearning.png"),
      subHeader: "Deep Learning Specialization",
      duration: "July 2020 - November 2020",
    desc:
        "The courses concentrated on Improving Deep Neural Networks, Hyperparameter Tuning, Regularization and Optimization",
      descBullets: ["Regression", "Logistic Regression", "Convolutional Neural Networks"]  
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer",
      company: "3pillar Global",
      companylogo: require("./assets/images/3pillar.png"),
      date: "July 2019 – October 2019",
      desc:
        "During the Summer of 2019, I was chosen to be a Frontend Developer Intern at 3pillar Global. There we used the coolest technologies available.",
      descBullets: [
        "JavaScript",
        "ReactJS and Redux",
        "Material UI",
      ]
    },
    {
      role: "Frontend Developer",
      company: "freelancer.com",
      companylogo: require("./assets/images/freelancerLogo.png"),
      date: "November 2019 – Present",
      desc:
        " Developed highly interactive User Interfaces for web applications using React & Redux, Wordpress, HTML5 & CSS, Javascript."
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "ciprian0104", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME BIGGER PROJECTS THAT I DID TOGETHER WITH OTHERS OR ALONE",
  projects: [
    {
      image: require("./assets/images/trelloLogo.png"),
      projectName: "Tickets Panel Application",
      projectDesc: "A Web Application similar to Trello",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://festive-dijkstra-03071a.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/real-estate.jpg"),
      projectName: "Real Estate Application",
      projectDesc: "A Real Estate Website using Django",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/ciprian0104/Real-Estate-Django"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Developer Scholarship",
      subtitle:
        "Scholarship recipient out of 10.000 applicants in which we learn the basics of Android Development.                                                                                           ",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View my Android Developer Certificate",
          url:
            "https://confirm.udacity.com/AYTHNCZS"
        },

      ]
    },
    {
      title: "Machine Learning Certificate",
      subtitle:
        "In this course we covered: Linear Regression, Logistic Regression ,Artificial Neural Network, Machine Learning (ML) Algorithms                                                                 ",
      image: require("./assets/images/stanford-logo.png"),
      footerLink: [
        {
          name: "View my Stanford Machine Learning Certificate",
          url:
            "https://coursera.org/share/771a90c3eeb2d509f866de2c0bdf29ea"
        }
      ]
    },

    {
      title: "Full-Stack Web Development with React",
      subtitle: "In this specialization we learned to design a full-fledged Web client applications, develop server-side applications using Node.js, ExpressJS and MongoDB.",
      image: require("./assets/images/hklogo.png"),
      footerLink: [
        { name: "View my React Certificate", url: "https://coursera.org/share/038f38fbd9223e80fb6bc7883b009563"},

      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@ciprian0104/",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "  😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
    email_address: "serac.ciprian0104@gmail.com",
    number: "+40 0742217474", 
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
