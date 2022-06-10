// Code your solution here
const drivers = [{name: 'Suzan', hometown: 'SB'}, {name: 'Renzo', hometown: 'LA'}]

const names = ['Sammy', 'sally', 'RINGO'];

function findMatching (driverArray, driverName) {
    const driverNameUpper = driverName.toUpperCase();
    const matchedNames = driverArray.filter (driver => driver.toUpperCase() === driverNameUpper);
    return matchedNames;
}

// Using arrow function below (also passes test)
// function fuzzyMatch (driverArray, string) {
//     const fuzzyDrivers = driverArray.filter (driver => driver.startsWith(string));
//     return fuzzyDrivers;
// }

function fuzzyMatch (driverArray, string) {
    const fuzzyNames = driverArray.filter (function (driver) {
        return driver.startsWith(string);
    })
    return fuzzyNames;
}

// Using arrow function below (also passes test)
// function matchName (driverObjects, string) {
//     const matchedNames = driverObjects.filter (driver => driver.name === string)
//     return matchedNames;
// }

function matchName (driverObjects, string) {
    const matchedNames = driverObjects.filter (function (driver) {
        return driver.name === string;
    } )
    return matchedNames;
} 