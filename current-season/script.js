let activeSeason;

const setActiveSeason = (season) => {
  activeSeason = season;
};

const getDate = () => {
  const newDate = new Date();
  const month = newDate.getMonth() + 1;
  const d = newDate.getDate();
  
  return [d, month];
};

const seasons = {
  "winter": {
    "next": "spring",
    "dates": {
      "start": [21, 12],
      "end": [19, 3]
    },
    "photoUrl": "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "icon": `<i class="fas fa-snowflake"></i>`,
    "color": "#0e36a5",
  },
  "spring": {
    "next": "summer",
    "dates": {
      "start": [20, 3],
      "end": [20, 6]
    },
    "photoUrl": "https://images.pexels.com/photos/414083/pexels-photo-414083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "icon": `<i class="fas fa-fan"></i>`,
    "color": "#276008",
  },
  "summer": {
    "next": "autumn",
    "dates": {
      "start": [21, 6],
      "end": [21, 9]
    },
    "photoUrl": "https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "icon": `<i class="fas fa-sun"></i>`,
    "color": "#e5ae0c",
  },
  "autumn": {
    "next": "winter",
    "dates": {
      "start": [22, 9],
      "end": [20, 12]
    },
    "photoUrl": "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "icon": `<i class="fas fa-leaf"></i>`,
    "color": "#60081f",
  },
};

const getSeason = () => {
  const [day, month] = getDate();
  
  const season = Object.entries(seasons).find(([s, values]) => {
    let isMonthInRange;
    let isDayInRange = true;
    const {dates} = values;
    
    isMonthInRange = values.dates.start[1] > dates.end[1] 
      ? (month >= dates.start[1] || month <= dates.end[1]) 
      : (month >= dates.start[1] && month <= dates.end[1]);
    
    if (isMonthInRange && month === dates.start[1]) {
      isDayInRange = day >= dates.start[0];
    } else if (isMonthInRange && month === dates.end[1]) {
      isDayInRange = day <= dates.end[0];
    }
    
    return isMonthInRange && isDayInRange;
  });
  
  setActiveSeason(season);
};

getSeason();

const root = document.querySelector(':root');
const heading = document.getElementById("heading-season");
const icon = document.getElementById("icon");
const button = document.getElementById("button-next-season");
const iconWrapper = document.getElementById("icon-wrapper");

const setSeasonVariables = (currentSeason) => {
  heading.innerHTML = currentSeason[0];
  icon.innerHTML = currentSeason[1].icon;
  button.innerHTML = `Go to ${currentSeason[1].next} <i class="fas fa-arrow-right"></i>`;
  root.style.setProperty("--bg-image", `url(${currentSeason[1].photoUrl})`);
  root.style.setProperty("--season-color", `${currentSeason[1].color}`);
};

setSeasonVariables(activeSeason);

const onClickNext = () => {
  const nextSeason = [activeSeason[1].next, seasons[activeSeason[1].next]];
  activeSeason = nextSeason;
  
  setSeasonVariables(activeSeason);;
};
