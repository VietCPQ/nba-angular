export const FormatDate = (date: Date) => {
    var dd = (date.getDate() + "").padStart(2, '0');
    var mm = ((date.getMonth() + 1) + "").padStart(2, '0');
    var yyyy = date.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
}