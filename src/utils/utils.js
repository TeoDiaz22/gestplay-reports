import moment from "moment/moment";

export const formatDate = (dateString) => {
    return moment(dateString).format("DD/MM/YYYY HH:mm");
};

export const formatToOnlyDate = (dateString) => {
    return moment(dateString).format("DD/MM/YYYY");
}