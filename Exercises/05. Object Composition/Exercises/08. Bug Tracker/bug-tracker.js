function createBugTrackerObj() {
    function createBugElement(bug) {
        let $bugElement = $("<div>")
            .attr("id", `report_${bug.ID}`)
            .addClass("report");

        $("<div>").addClass("body")
            .append($("<p>").text(bug.description))
            .appendTo($bugElement);

        $("<div>")
            .addClass("title")
            .append($("<span>")
                .addClass("author")
                .text(`Submitted by: ${bug.author}`))
            .append($("<span>")
                .addClass("status")
                .text(`${bug.status} | ${bug.severity}`))
            .appendTo($bugElement);

        return $bugElement;
    }
    
    function addBugToPage(bug) {
        let $bugElement = createBugElement(bug);
        
        $resultElement.append($bugElement);
    }
    
    let id = 0;
    
    let $resultElement = null;
    let bugs = [];

    let obj = {
        report: function(author, description, reproducible, severity) {
            let bugId = id++;
            
            let bug = {
                ID: bugId,
                author,
                description,
                reproducible,
                severity,
                status: "Open"
            };

            bugs[bugId] = bug;
            
            addBugToPage(bug);
        },
        setStatus: (id, newStatus) => {
            bugs[id].status = newStatus;

            $resultElement.children("#report_0")
                .children("div.title")
                .children("span.status")
                .text(`${newStatus} | ${bugs[id].severity}`);
        },
        remove: (id) => {
            bugs[id] = null;
            $resultElement.children(`#report_${id}`).remove();
        },
        sort: (method = "ID") => {
            if (method === "author") {
                bugs.sort((a, b) => a.author.localeCompare(b.author));
            } else {
                bugs.sort((a, b) => a[method] - b[method])
            }

            $resultElement.children("div.report").remove();

            bugs.forEach(bug => {
                addBugToPage(bug);
            });
        },
        output: (selector) => $resultElement = $(selector)
    };

    return obj;
}