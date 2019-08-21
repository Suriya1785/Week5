/*Description: window onload Init script to create web page using ES6 features
 *Author: HartCode Programmer
 *Date:08/20/2019
 */
"use strict";

let data = [{
        "CourseId": "19SUM100",
        "Title": "Introduction to HTML/CSS/Git",
        "Location": "Classroom 7",
        "StartDate": "07/08/19",
        "Fee": "100.00"
    },
    {
        "CourseId": "19SUM200",
        "Title": "Introduction to JavaScript",
        "Location": "Classroom 7",
        "StartDate": "07/22/19",
        "Fee": "350.00"
    },
    {
        "CourseId": "19SUM300",
        "Title": "Introduction to Node.JS and Express",
        "Location": "Classroom 7",
        "StartDate": "09/09/19",
        "Fee": "50.00"
    },
    {
        "CourseId": "19SUM400",
        "Title": "Introduction to SQL and Databases",
        "Location": "Classroom 7",
        "StartDate": "09/16/19",
        "Fee": "50.00"
    },
    {
        "CourseId": "19SUM500",
        "Title": "Introduction to Angular",
        "Location": "Classroom 7",
        "StartDate": "09/23/19",
        "Fee": "50.00"
    }
];
let selectCourse = "19SUM500";
// each function will run through whole array even if it finds a match
// find function will stop once it matches
let matchCourse = data.find(function(value, index, array) {
    if (selectCourse == value.CourseId) {
        return true;
    } else {
        return false;
    }
})
console.log(JSON.stringify(matchCourse));

// named function
matchCourse = data.find(courseSearch);
console.log(JSON.stringify(matchCourse));

// Use of arrow function
let people = [
    { name: "Zachary", age: 29 },
    { name: "Britrtany", age: 33 },
    { name: "Natalie", age: 35 },
    { name: "Dana", age: 60 }
];
let person = people.find(p => p.age > 60);
if (person == null) {
    console.log("no match");
} else {
    console.log(person.name);
}

// value, index and array works
function courseSearch(value, index, array) {
    if (selectCourse == value.CourseId) {
        return true;
    } else {
        return false;
    }
}