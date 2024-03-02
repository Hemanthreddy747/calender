// document.addEventListener("DOMContentLoaded", function () {
//   // Initialize calendar
//   let currentMonth = new Date().getMonth();
//   let currentYear = new Date().getFullYear();
//   const monthEl = document.querySelector(".date h1");
//   const fullDateEl = document.querySelector(".date p");
//   const datesEl = document.querySelector(".dates");
//   displayCalendar(currentMonth, currentYear);

//   // Event listeners for navigation buttons
//   document.querySelector(".prev").addEventListener("click", function () {
//     updateCalendar(-1);
//   });

//   document.querySelector(".now").addEventListener("click", function () {
//     const now = new Date();
//     currentMonth = now.getMonth();
//     currentYear = now.getFullYear();
//     displayCalendar(currentMonth, currentYear);
//   });

//   document.querySelector(".next").addEventListener("click", function () {
//     updateCalendar(1);
//   });

//   // Functions
//   function displayCalendar(month, year) {
//     const months = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ];
//     const days = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ];

//     monthEl.textContent = months[month] + " " + year;

//     const firstDay = new Date(year, month, 1).getDay();
//     const lastDate = new Date(year, month + 1, 0).getDate();

//     let dates = "";

//     for (let i = 0; i < firstDay; i++) {
//       dates += `<div class="empty"></div>`;
//     }

//     for (let i = 1; i <= lastDate; i++) {
//       if (
//         i === new Date().getDate() &&
//         month === new Date().getMonth() &&
//         year === new Date().getFullYear()
//       ) {
//         dates += `<div class="today">${i}</div>`;
//       } else {
//         dates += `<div>${i}</div>`;
//       }
//     }

//     datesEl.innerHTML = dates;

//     // Set full date
//     const newDate = new Date();
//     fullDateEl.textContent =
//       days[newDate.getDay()] +
//       ", " +
//       newDate.getDate() +
//       " " +
//       months[newDate.getMonth()] +
//       " " +
//       newDate.getFullYear();
//   }

//   function updateCalendar(delta) {
//     currentMonth += delta;
//     if (currentMonth > 11) {
//       currentMonth = 0;
//       currentYear++;
//     } else if (currentMonth < 0) {
//       currentMonth = 11;
//       currentYear--;
//     }
//     displayCalendar(currentMonth, currentYear);
//   }
// });

$(document).ready(function () {
  // Initialize calendar
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  const monthEl = $(".date h1");
  const fullDateEl = $(".date p");
  const datesEl = $(".dates");
  displayCalendar(currentMonth, currentYear);

  // Event listeners for navigation buttons
  $(".prev").on("click", function () {
    updateCalendar(-1);
  });

  $(".now").on("click", function () {
    const now = new Date();
    currentMonth = now.getMonth();
    currentYear = now.getFullYear();
    displayCalendar(currentMonth, currentYear);
  });

  $(".next").on("click", function () {
    updateCalendar(1);
  });

  // Functions
  function displayCalendar(month, year) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    monthEl.text(months[month] + " " + year);

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    let dates = "";

    for (let i = 0; i < firstDay; i++) {
      dates += `<div class="empty"></div>`;
    }

    for (let i = 1; i <= lastDate; i++) {
      if (
        i === new Date().getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear()
      ) {
        dates += `<div class="today">${i}</div>`;
      } else {
        dates += `<div>${i}</div>`;
      }
    }

    datesEl.html(dates);
    console.log(datesEl.html(dates));
    // Set full date
    const newDate = new Date();
    fullDateEl.text(
      days[newDate.getDay()] +
        ", " +
        newDate.getDate() +
        " " +
        months[newDate.getMonth()] +
        " " +
        newDate.getFullYear()
    );
  }

  function updateCalendar(delta) {
    currentMonth += delta;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    } else if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    displayCalendar(currentMonth, currentYear);
  }
});
