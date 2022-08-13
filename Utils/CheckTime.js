export const checkTimeHasPassed = (time, selectedDate) => {
  const dt =
    new Date().getMonth() +
    1 +
    "/" +
    new Date().getDate() +
    "/" +
    new Date().getFullYear() +
    " " +
    time;

  var sd =
    selectedDate.getMonth() +
    1 +
    "/" +
    selectedDate.getDate() +
    "/" +
    selectedDate.getFullYear() +
    " " +
    time;

  var now = new Date();
  var scheduleDate = sd || new Date(dt);
  console.log(selectedDate, now, selectedDate > now);

  if (scheduleDate > now) {
    return true;
  }
  return false;
};
