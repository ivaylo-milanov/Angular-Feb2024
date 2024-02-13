"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ticket_1 = require("./ticket");
var getTickets = function (ticketsData, sortingCriteria) {
    var entries = ticketsData
        .map(function (data) { return data.split("|"); })
        .map(function (dataArray) {
        var ticket = new ticket_1.Ticket(dataArray[0], Number(dataArray[1]), dataArray[2]);
        return ticket;
    })
        .sort(function (a, b) { return compareTickets(a, b, sortingCriteria); });
    return entries;
};
function compareTickets(ticketOne, ticketTwo, criteria) {
    if (ticketOne[criteria] < ticketTwo[criteria]) {
        return -1;
    }
    else if (ticketOne[criteria] > ticketTwo[criteria]) {
        return 1;
    }
    return 0;
}
console.log(getTickets([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "status"));
