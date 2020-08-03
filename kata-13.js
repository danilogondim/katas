// function that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date

const talkingCalendar = function (date) {
  let dateArray = date.split("/");
  let year = dateArray[0];
  let month = dateArray[1];
  let day = dateArray[2];

  // convert the month number into the corresponding month name
  const parsedMonths = {
    "01": "January", "02": "February", "03": "March", "04": "April", "05": "May", "06": "June", "07": "July", "08": "August", "09": "September", "10": "October", "11": "November", "12": "December",
  }
  month = parsedMonths[month];

  // convert a given day into its ordinate form
  if (Number(day) < 10) {
    day = day[1];
  }
  switch (day) {
    case "1":
      day += "st";
      break;
    case "2":
      day += "nd";
      break;
    case "3":
      day += "rd";
      break;
    default:
      day += "th"
  };

  return month + " " + day + ", " + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));