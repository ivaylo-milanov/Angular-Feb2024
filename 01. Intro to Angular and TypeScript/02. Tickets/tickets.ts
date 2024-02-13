import { Ticket } from "./ticket";

const getTickets: (
  ticketsData: string[],
  sortingCriteria: string
) => Ticket[] = (ticketsData, sortingCriteria) => {
  const entries: Ticket[] = ticketsData
    .map((data) => data.split("|"))
    .map((dataArray) => {
      const ticket = new Ticket(
        dataArray[0],
        Number(dataArray[1]),
        dataArray[2]
      );
      return ticket;
    })
    .sort((a, b) => compareTickets(a, b, sortingCriteria));

  return entries;
};

function compareTickets(ticketOne, ticketTwo, criteria) {
  if (ticketOne[criteria] < ticketTwo[criteria]) {
    return -1;
  } else if (ticketOne[criteria] > ticketTwo[criteria]) {
    return 1;
  }

  return 0;
}

console.log(
  getTickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "status"
  )
);
