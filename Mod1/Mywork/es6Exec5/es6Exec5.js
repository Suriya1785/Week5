/*Description: window onload Init script to create web page using ES6 features
 *Author: HartCode Programmer
 *Date:08/22/2019
 */
let movies = [{
        name: "Twister",
        description: "Epic action disaster film",
        yearReleased: 1996,
        rating: "PG-13",
        cast: ["Bill Paxton", "Helen Hunt"]
    },
    {
        name: "Chinna Gounder",
        description: "Epic village judge film",
        yearReleased: 1995,
        rating: "PG-13",
        cast: ["Vijay Kanth", "Suganya"]
    },
    {
        name: "Baasha",
        description: "Epic Gangster film",
        yearReleased: 2000,
        rating: "PG-13",
        cast: ["Rajini Kanth", "Nakma"]
    },
    {
        name: "Muthu",
        description: "Epic Raja film",
        yearReleased: 1998,
        rating: "PG-13",
        cast: ["Rajini Kanth", "Meena"]
    },
    {
        name: "Enthiran",
        description: "Epic Tamil Robotics film",
        yearReleased: 2013,
        rating: "PG-13",
        cast: ["Rajini Kanth", "Aishwarya Rai"]
    },
    {
        name: "Robo-2",
        description: "Epic Tamil Robotics II  film",
        yearReleased: 2018,
        rating: "PG-13",
        cast: ["Rajini Kanth", "XXXX"]
    },
    {
        name: "Anniyan",
        description: "Epic Honest film",
        yearReleased: 2010,
        rating: "PG-13",
        cast: ["Vikram", "Meena"]
    },
    {
        name: "Rambo",
        description: "Epic English film",
        yearReleased: 1980,
        rating: "PG-13",
        cast: ["Sivester Stalin", "Unknown"]
    },
    {
        name: "Hulk",
        description: "Epic Fantasy film",
        yearReleased: 2006,
        rating: "PG-13",
        cast: ["Unknown", "Unknow"]
    },
    {
        name: "Arunachalam",
        description: "Epic Servant film",
        yearReleased: 2001,
        rating: "PG-13",
        cast: ["Rajini Kanth", "Sowndharya"]
    }
];

// usage of for-of function 
for (let { name: n, yearReleased: y }
    of movies) {
    console.log("Name:" + n + '\t' + "Year Released:" + y);
}