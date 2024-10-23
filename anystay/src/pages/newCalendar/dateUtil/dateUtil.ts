export const getFormattedDate = (isoDateString: string) => {
    // Create a new Date object from the ISO string
    let date = new Date(isoDateString);
    // Format the date and time to the desired format "YYYY-MM-DD HH:MM:SS"
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let day = String(date.getDate()).padStart(2, "0");
    let formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
};
export const getFormattedDateAndTime = (isoDateString: string) => {
    // Create a new Date object from the ISO string
    let date = new Date(isoDateString);
    // Format the date and time to the desired format "YYYY-MM-DD HH:MM:SS"
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let day = String(date.getDate()).padStart(2, "0");
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");
    let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDate;
};
export const getPopupDate = (dateString: string) => {
    // Create a new Date object from the date string
    let date = new Date(dateString);

    // Array of month names in short form
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Array of day names in full form
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Get the components
    let month = monthNames[date.getMonth()];
    let day = String(date.getDate()).padStart(2, "0");
    let dayOfWeek = dayNames[date.getDay()];

    return {
        month: month,
        day: day,
        dayOfWeek: dayOfWeek,
    };
};
