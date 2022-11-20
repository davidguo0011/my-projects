const typed = new Typed('.auto-type', {
  strings: [
    'a UQ student',
    'interested in programming',
    'keen to gain experiences',
  ],
  typeSpeed: 120,
  backSpeed: 50,
  loop: true,
});

const btns = {
  '#scrollToHome': '#home',
  '#scrollToMe': '#about-me',
  '#scrollToEducation': '#education',
  '#scrollToExperience': '#experience',
  '#scrollToProjects': '#projects',
};
for (let key in btns) {
  $(key).click(function () {
    $('html, body').animate(
      {
        scrollTop: $(btns[key]).offset().top,
      },
      500
    );
    $('li').removeClass('active-icon');
    $(key).addClass('active-icon');
  });
}

$(window).on('scroll', function () {
  const windowYOffset = window.pageYOffset;
  const aboutMeOffset = $('#about-me').offset().top;
  const educationOffset = $('#education').offset().top;
  const experienceOffset = $('#experience').offset().top;
  const projectsOffset = $('#projects').offset().top;

  if (windowYOffset < aboutMeOffset - 70) {
    //home icon avtive
    $('li').removeClass('active-icon');
    $('#scrollToHome').addClass('active-icon');
  }
  if (
    windowYOffset > aboutMeOffset - 70 &&
    windowYOffset < educationOffset - 70
  ) {
    const techStacks = document.querySelectorAll('.actual-tech-level');
    const techPercent = ['80%', '60%', '70%', '60%', '40%', '50%', '40%'];
    for (let index in techPercent) {
      techStacks[index].style.width = techPercent[index];
    }
    //me icon avtive
    $('li').removeClass('active-icon');
    $('#scrollToMe').addClass('active-icon');
  }
  if (
    windowYOffset > educationOffset - 70 &&
    windowYOffset < experienceOffset - 70
  ) {
    const institutions = document.querySelectorAll('.institution');
    const dutys = document.querySelectorAll('.duty');
    institutions[0].style.transform = 'translateX(0)';
    dutys[0].style.transform = 'translateX(0)';
    institutions[1].style.transform = 'translateX(0)';
    dutys[1].style.transform = 'translateX(0)';
    //education icon avtive
    $('li').removeClass('active-icon');
    $('#scrollToEducation').addClass('active-icon');
  }
  if (
    windowYOffset > experienceOffset - 70 &&
    windowYOffset < projectsOffset - 70
  ) {
    const lefts = document.querySelectorAll('.left');
    const rights = document.querySelectorAll('.right');
    const array = ['#firstExperience', '#secondExperience', '#thirdExperience'];
    for (let index in array) {
      if (windowYOffset > $(array[index]).offset().top - 400) {
        lefts[index].style.opacity = '100';
        rights[index].style.transform = 'translateX(0)';
      }
    }
    //experience icon avtive
    $('li').removeClass('active-icon');
    $('#scrollToExperience').addClass('active-icon');
  }
  if (windowYOffset > projectsOffset - 70) {
    //projects icon avtive
    $('li').removeClass('active-icon');
    $('#scrollToProjects').addClass('active-icon');
  }
});

//slide show
const projects = [
  {
    title: 'CSSE7030',
    description:
      'Key Cave Adventure Game. The game is a single-player dungeon-crawler game where the player adventurously explores a dungeon. The objective is for the player to find the key and get out of the dungeon through the door. This game is full of adventure. The gameplay utilizes simple key commands. GUI required.',
  },
  {
    title: 'DECO7180',
    description:
      "The group designs and provides a platform to find like- minded fans. One is to provide Brisbane cycling routes for cyclists to encourage more cyclists to make friends. Also, this app makes it easier and more friendly for beginners in cycling. It can provide good support for the entire cycling process, including route planning, event provision, and gathering of people participating in the event. It can also help grow the Brisbane cycling community and raise awareness of the importance of Brisbane's cycling routes. The primary audience for this app is 25-55-year-olds, gender-neutral, all cyclists living in Brisbane. To be more precise, the audience for the app ranges from beginners to highly skilled, fitness-conscious, inclusive social-status people, and those who want to make friends while riding. To complete this application, we first chose Mapbox, which offers a wealth of functional components, APIs, and design possibilities. Furthermore, we selected the following datasets from the given dataset websites: Wireless Hotspot Locations - Libraries, Parks and Public Spaces, Parks - Locations, and Parks - Water Fountain Faucets Locations.",
  },
  {
    title: 'DECO7230',
    description:
      "The idea of this prototype comes from in real life, some people who don't know how to ride a bicycle but want to experience controlling the bicycle. When experiencing this prototype, people need to grasp the simulated bicycle handlebar to control the forward, left and right, and backward of the bicycle, and the user needs to avoid obstacles on the track and reach the end within the prescribed time. The improvement of Prototype 3 is based on the physical interaction of Prototype 1 and Prototype 2 and the feedback after user testing. In order to allow users to have a more realistic bicycle control, I added Arduino to control the gravity sensor based on the bicycle movement function in the prototype. The user can use the direction of the handlebar to control the bicycle in the prototype. Based on the user feedback of Prototype 2, I also added some UI interfaces to guide users to start the game and included a countdown function to let users clearly see their remaining time. When the countdown is over, the game is over",
  },
  {
    title: 'DECO7250',
    description:
      'Applying the concept of interaction design more considers the user experience in mobile software applications. Of all the different types of applications, service applications are by far the most common type of application. Our group designed a detailed interaction design process for a wedding application, summarized the interaction design concepts used in the process, and provided a detailed tuning analysis based on a mid-fidelity model to a high- fidelity model.',
  },
  {
    title: 'GEOM7005',
    description:
      'Use GIS for environmental analysis and facility location selection. According to the characteristics of the regional geographical environment, the best location is selected by comprehensively considering factors such as resource allocation, market potential, traffic conditions, topographic characteristics, environmental impact, and wetlands.',
  },
];
const slideShowBadges = document.querySelectorAll('.slide-show-badge');
const slideShowLeft = document.querySelector('.slide-show-left');
const slideShowRight = document.querySelector('.slide-show-right');
const slideShowImages = document.querySelectorAll('.slide-show img');
const projectsDescription = document.querySelector('.projects-description p');
let index = 0;

const showDiv = function (num) {
  for (const badge of slideShowBadges) {
    badge.classList.remove('active');
  }
  for (const image of slideShowImages) {
    image.classList.remove('img-active');
  }
  slideShowBadges[num].classList.add('active');
  slideShowImages[num].classList.add('img-active');
  projectsDescription.innerHTML = `<strong>${projects[num].title}: <strong> ${projects[num].description}`;
};
const plusDiv = function (num) {
  index = (index + num + projects.length) % projects.length;
  showDiv(index);
};
const currentDiv = function (num) {
  index = num;
  showDiv(index);
};
showDiv(index);
