function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)}

for (let i = 0; i < 50; i++) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  
  bubble.style.setProperty('--top', randomIntFromInterval(-5,100) + '%');
  bubble.style.setProperty('--left', randomIntFromInterval(-5,100) + '%');
  bubble.style.setProperty('--translation-y-up', randomIntFromInterval(-200, 200) + '%');
  bubble.style.setProperty('--translation-y-down', randomIntFromInterval(200, 300) + '%');
  bubble.style.setProperty('--translation-x', randomIntFromInterval(200, 300) + '%');
  bubble.style.setProperty('--translation-x-down', randomIntFromInterval(-200, 200) + '%');
  bubble.style.setProperty('--animation-time', randomIntFromInterval(7, 15) + "s");
  document.getElementById("box").appendChild(bubble);
}
