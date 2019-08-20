/*Description: window onload Init script to create web page using ES6 features
 *Author: HartCode Programmer
 *Date:08/20/2019
 */
"use strict";
$(function() {
    let table = $("#sportTable");
    let data = [
        { sport: "Football", bestTeam: "Dallas Cowboys" },
        { sport: "Baseball", bestTeam: "Texas Rangers" },
        { sport: "Basketball", bestTeam: "Dallas Mavericks" },
        { sport: "Hockey", bestTeam: "Dallas Stars" },
        { sport: "Soccer", bestTeam: "FCDallas" }
    ];
    table.addClass("table-responsive table-striped table-sm")
    createHeader(table);
    createTbody(table);
    let tbody = $("tbody")
    $.each(data, function(key, value) {
        createVerticalRow(tbody, value.sport, value.bestTeam);
    })
})

function createHeader(table) {
    let htmlString = `
    <thead>
        <tr>
            <th>Sport</td>
            <th>Team</td>
        </tr>
    </thead>`;
    table.append(htmlString);
}

function createVerticalRow(tbody, data1, data2) {
    let row = `
    <tr>
        <td>${data1}</td>
        <td>${data2}</td>
    </tr>`;
    tbody.append(row);
}

function createTbody(table) {
    let tbodyId = "sportId";
    if ($(tbodyId).length == 0) {
        let tbodyTag = `
        <tbody id=${tbodyId}></tbody>`;
        table.append(tbodyTag);
    }
}