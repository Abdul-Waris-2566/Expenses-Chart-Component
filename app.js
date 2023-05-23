"use strict";

const spendingBars = document.querySelectorAll(".spending-bar");
const dailySpendings = document.querySelectorAll(".spendings");
const daysOfWeek = document.querySelectorAll(".day");
const weeklyreportContainer = document.querySelector(".weekly-report");
const dailyReport = document.querySelectorAll(".daily-report");

let html = "";

// Fetching Json Data
const jsonData = async function () {
  const response = await fetch("./data.json");
  const data = await response.json();

  data.forEach((_, i) => {
    let amount = data[i].amount;
    let height = Math.trunc(data[i].amount * 3);
    let day = data[i].day;

    html += `
    <div class="daily-report">
    <small class="spendings" >${amount}</small>
    <div class="spending-bar" style="height:${height}px" ></div>
    <p class="day">${day}</p>
    </div>`;
  });

  weeklyreportContainer.innerHTML = html;
};

jsonData();
