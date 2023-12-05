export function showCurrentDate() {

    var currentDate = new Date();
  
  
    var day = currentDate.toLocaleString('en-US', { weekday: 'long' });
    var month = currentDate.toLocaleString('en-US', { month: 'long' });
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();
  

    return(`${day}, ${month} ${date}, ${year}`);
  }
  

  showCurrentDate();
  