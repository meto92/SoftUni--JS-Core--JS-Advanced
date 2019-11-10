function getSortedTickets(ticketDescriptions, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    ticketDescriptions.map(td => td.split("|"))
        .forEach(([description, price, status]) => {
            let ticket = new Ticket(description, +price, status);

            tickets.push(ticket);
        });

    if (sortingCriteria === "price") {
        tickets.sort((a, b) => a.price - b.price);
    } else {
        tickets.sort((a, b) => a[sortingCriteria].localeCompare(b[sortingCriteria]));
    }
    
    return tickets;
}