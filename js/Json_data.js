var relatives = [
    { id: 1, name: "Margaret", relation: "grandmother", birthdate: "1930-05-08" },
    { id: 2, name: "Greg", relation: "father", birthdate: "1957-08-27" },
    { id: 3, name: "Cindy", relation: "mother", birthdate: "1954-07-06" },
    { id: 4, name: "Rick", relation: "uncle", birthdate: "1959-03-31" },
    { id: 5, name: "Sherry", relation: "aunt", birthdate: "1960-04-15" },
    { id: 6, name: "Sandy", relation: "aunt", birthdate: "1961-05-18" },
    { id: 7, name: "Lisa", relation: "aunt", birthdate: "1964-04-01" },
    { id: 8, name: "Lori", relation: "aunt", birthdate: "1966-04-01" }
];

function Load()
{
    buildDivCol();
}

function buildDivCol()
{
    var cCc = document.getElementById("cC");

    for(var r of relatives)
    {
        var row = '<div class="row">';
        row += `<div class="col-1">${r.id}</div>`;
        row += `<div class="col">${r.name}</div>`;
        row += `<div class="col">${r.relation}</div>`;
        row += `<div class="col">${r.birthdate}</div>`;
        // row += '<div class="col">' + r.id + '</div>';
        // row += '<div class="col">' + r.name + '</div>';
        // row += '<div class="col">' + r.relation + '</div>';
        // row += '<div class="col">' + r.birthdate + '</div>';
        row += '</div>';

        cCc.innerHTML += row;
    }

}