export const checkTimeHasPassed = (time) => {
  const dt =
    new Date().getMonth() +
    1 +
    "/" +
    new Date().getDate() +
    "/" +
    new Date().getFullYear() +
    " " +
    time;
  var now = new Date();
  var scheduleDate = new Date(dt);
  console.log(scheduleDate);

  if (scheduleDate > now) {
    return true;
  }
  return false;
};
