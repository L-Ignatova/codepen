const date = new Date();
const { getHours, getMinutes } = date;

const currentTimeTag = document.getElementById("current-time");
const rootTag = document.querySelector(":root");

function getTime(callback) {
  return callback() < 10 ? `0${callback()}` : callback();
}

function getColorTheme(hour, minutes) {
  const totalMinutes = hour * 60 + minutes;

  if (420 <= totalMinutes && totalMinutes <= 1080) {
    const r = 700 - (100 / 660) * (totalMinutes - 420);
    const y = -200 + (800 / 660) * (totalMinutes - 420);
    const x = Math.sqrt(r ** 2 - y ** 2);

    rootTag.style.setProperty("--sun-x", `${Math.round(x)}px`);
    rootTag.style.setProperty("--sun-y", `${Math.round(y)}px`);
    rootTag.style.setProperty("--display-sun", "block");
  } else {
    rootTag.style.setProperty("--display-sun", "none");
  }

  if (totalMinutes > 1140 || totalMinutes < 430) {
    rootTag.style.setProperty("--text-color", "white");
  } else {
    rootTag.style.setProperty("--text-color", "black");
  }

  if (541 <= totalMinutes && totalMinutes <= 840) {
    const red = 0;
    const green = Math.round((20 / 299) * (totalMinutes - 541));
    const blue = Math.round((118 / 299) * (totalMinutes - 541));

    return `rgb(${255 - red},${255 - green},${255 - blue})`;
  }

  if (841 <= totalMinutes && totalMinutes <= 1320) {
    const red = Math.round((188 / 480) * (totalMinutes - 841));
    const green = Math.round((166 / 480) * (totalMinutes - 841));
    const blue = Math.round((76 / 480) * (totalMinutes - 841));

    return `rgb(${255 - red},${232 - green},${137 - blue})`;
  }

  if (
    (1321 <= totalMinutes && totalMinutes <= 1440) ||
    (0 <= totalMinutes && totalMinutes <= 300)
  ) {
    const currentMinutes =
      1321 <= totalMinutes && totalMinutes <= 1440
        ? totalMinutes - 1321
        : totalMinutes + 119;

    const red = Math.round((67 / 419) * currentMinutes);
    const green = Math.round((66 / 419) * currentMinutes);
    const blue = Math.round((61 / 419) * currentMinutes);

    return `rgb(${67 - red},${66 - green},${61 - blue})`;
  }

  if (301 <= totalMinutes && totalMinutes <= 540) {
    const red = Math.round((255 / 239) * (totalMinutes - 301));
    const green = Math.round((255 / 239) * (totalMinutes - 301));
    const blue = Math.round((255 / 239) * (totalMinutes - 301));

    return `rgb(${red},${green},${blue})`;
  }
}

const hours = getTime(getHours.bind(date));
const minutes = getTime(getMinutes.bind(date));

currentTimeTag.textContent = `${hours}:${minutes}`;
rootTag.style.setProperty(
  "--background-color",
  getColorTheme(date.getHours(), date.getMinutes())
);

function refreshTheme() {
  const date = new Date();
  const hh = date.getHours;
  const mm = date.getMinutes;

  currentTimeTag.textContent = `${getTime(hh.bind(date))}:${getTime(
    mm.bind(date)
  )}`;
  rootTag.style.setProperty(
    "--background-color",
    getColorTheme(hh.bind(date)(), mm.bind(date)())
  );
}
