export const formatDate = (date) => {
    var year = date.getFullYear();
    var month = twoDigit(date.getMonth() + 1);
    var day = twoDigit(date.getDate());
    var formattedDate = year + "-" + month + "-" + day;
    return formattedDate.toString();
}
function twoDigit(number) {
    if (number < 10) {
        return "0" + number;
    }
}