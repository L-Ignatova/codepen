const randomMapper = {
  lightColor: ["white", "#FFF4F5", "#F7F5DD", "#9BDEAC", "#C0FCF7"],
  darkColor: ["#524A7E", "#344C6F", "#48817D", "#574143", "#BB2649", "#683F4E", "#007975", "#00B0A9", "#BD8185"],
  accentColors: [
    ["#BB2649", "white"],
    ["#FFE3E6", "black"], 
    ["#C0FCF7", "black"], 
    ["#9BDEAC", "black"], 
    ["#FFC8FF", "black"], 
    ["#00B0A9", "white"], 
    ["#949C1E", "white"], 
    ["#00524F", "white"]
  ],
};

const themeMapper = {
  option1: {
  "--header-bg": "#BD8185",
  "--header-tx": "#FFF4F5",
  "--section-one-bg": "white",
  "--section-one-tx": "black",
  "--section-two-bg": "#BD8185",
  "--section-two-tx": "#FFF4F5",
  "--section-three-bg": "white",
  "--section-three-tx": "black",
  "--action-btn-bg": "#BB2649",
  "--action-btn-tx": "#F7F5DD",
  "--footer-bg": "#BD8185",
  "--footer-tx": "#FFF4F5",
  },
  option2: {
  "--header-bg": "#007975",
  "--header-tx": "#FFF4F5",
  "--section-one-bg": "#00B0A9",
  "--section-one-tx": "#FFF4F5",
  "--section-two-bg": "#007975",
  "--section-two-tx": "#FFF4F5",
  "--section-three-bg": "#00B0A9",
  "--section-three-tx": "#FFF4F5",
  "--action-btn-bg": "#BB2649",
  "--action-btn-tx": "#F7F5DD",
  "--footer-bg": "#007975",
  "--footer-tx": "#FFF4F5",
  },
  option3: {
  "--header-bg": "#9BDEAC",
  "--header-tx": "#683F4E",
  "--section-one-bg": "white",
  "--section-one-tx": "#683F4E",
  "--section-two-bg": "#white",
  "--section-two-tx": "#683F4E",
  "--section-three-bg": "white",
  "--section-three-tx": "#683F4E",
  "--action-btn-bg": "#BB2649",
  "--action-btn-tx": "#F7F5DD",
  "--footer-bg": "#9BDEAC",
  "--footer-tx": "#FFF4F5",
  },
  option4: {
  "--header-bg": "#AB6880",
  "--header-tx": "#FFF4F5",
  "--section-one-bg": "#AB6880",
  "--section-one-tx": "#FFF4F5",
  "--section-two-bg": "#C2AAB2",
  "--section-two-tx": "#683F4E",
  "--section-three-bg": "#C2AAB2",
  "--section-three-tx": "#683F4E",
  "--action-btn-bg": "#9BDEAC",
  "--action-btn-tx": "#683F4E",
  "--footer-bg": "#AB6880",
  "--footer-tx": "#FFF4F5",
  },
  option5: {
    "--header-bg": "#BB2649",
    "--header-tx": "#FFF4F5",
    "--section-one-bg": "#BB2649",
    "--section-one-tx": "#FFF4F5",
    "--section-two-bg": "#BB2649",
    "--section-two-tx": "#FFF4F5",
    "--section-three-bg": "#BB2649",
    "--section-three-tx": "#FFF4F5",
    "--action-btn-bg": "#FF90D5",
    "--action-btn-tx": "#FFF4F5",
    "--footer-bg": "#BB2649",
    "--footer-tx": "#FFF4F5",
  },
  option6: {
    "--header-bg": "#FFF4F5",
    "--header-tx": "#574143",
    "--section-one-bg": "#FFF4F5",
    "--section-one-tx": "#574143",
    "--section-two-bg": "#FFF4F5",
    "--section-two-tx": "#574143",
    "--section-three-bg": "#FFF4F5",
    "--section-three-tx": "#574143",
    "--action-btn-bg": "#BB2649",
    "--action-btn-tx": "#F7F5DD",
    "--footer-bg": "#FFF4F5",
    "--footer-tx": "#574143",
  },
  option7: {
    "--header-bg": "#C0FCF7",
    "--header-tx": "#48817D",
    "--section-one-bg": "#C0FCF7",
    "--section-one-tx": "#48817D",
    "--section-two-bg": "#5BBAB5",
    "--section-two-tx": "#C0FCF7",
    "--section-three-bg": "#C0FCF7",
    "--section-three-tx": "#48817D",
    "--action-btn-bg": "#BB2649",
    "--action-btn-tx": "#F7F5DD",
    "--footer-bg": "#C0FCF7",
    "--footer-tx": "#48817D",
  },
  option8: {
    "--header-bg": "#524A7E",
    "--header-tx": "#C0FCF7",
    "--section-one-bg": "#524A7E",
    "--section-one-tx": "#C0FCF7",
    "--section-two-bg": "#344C6F",
    "--section-two-tx": "#C0FCF7",
    "--section-three-bg": "#524A7E",
    "--section-three-tx": "#C0FCF7",
    "--action-btn-bg": "#BB2649",
    "--action-btn-tx": "#F7F5DD",
    "--footer-bg": "#524A7E",
    "--footer-tx": "#C0FCF7",
  }
};

const changeTheme = () => {
  const theme = document.getElementById("palette").value;
  
  const root = document.querySelector(':root');
  
  Object.entries(themeMapper[theme]).forEach(([key,val]) => root.style.setProperty(key,val));
};

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const randomThemeSwitcher = () => {
  const { lightColor, darkColor, accentColors } = randomMapper;
  const light = getRandom(1,3);
  const mainTheme = light===1 ? lightColor : darkColor;
  const secondaryTheme = light===1 ? darkColor : lightColor;
  
  const root = document.querySelector(':root');
  root.style.setProperty( "--header-bg", `${mainTheme[getRandom(0, mainTheme.length)]}` );
  root.style.setProperty( "--header-tx", `${secondaryTheme[getRandom(0, secondaryTheme.length)]}` );
  root.style.setProperty( "--section-one-bg", `${mainTheme[getRandom(0, mainTheme.length)]}` );
  root.style.setProperty( "--section-one-tx", `${secondaryTheme[getRandom(0, secondaryTheme.length)]}` );
  root.style.setProperty( "--section-two-bg", `${mainTheme[getRandom(0, mainTheme.length)]}` );
  root.style.setProperty( "--section-two-tx", `${secondaryTheme[getRandom(0, secondaryTheme.length)]}` );
  root.style.setProperty( "--section-three-bg", `${mainTheme[getRandom(0, mainTheme.length)]}` );
  root.style.setProperty( "--section-three-tx", `${secondaryTheme[getRandom(0, secondaryTheme.length)]}` );
  
  const accent = accentColors[getRandom(0, accentColors.length)];
  
  root.style.setProperty( "--action-btn-bg", `${accent[0]}` );
  root.style.setProperty( "--action-btn-tx", `${accent[1]}` );
  root.style.setProperty( "--footer-bg", `${mainTheme[getRandom(0, mainTheme.length)]}` );
  root.style.setProperty( "--footer-tx", `${secondaryTheme[getRandom(0, secondaryTheme.length)]}` );
};
