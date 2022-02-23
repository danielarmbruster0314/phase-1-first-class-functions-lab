// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0,2);
}

const returnLastTwoDrivers = (arr) =>{
    return arr.slice(arr.length-2,arr.length);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(quadnum){
        return (num) => {
            return quadnum * num;
        }
}

const fareDoubler = (func) => {
    return func * 2;
}

fareDoubler(createFareMultiplier());

const fareTripler = (func) => {
    return func * 3;
}

fareTripler(createFareMultiplier());

function selectDifferentDrivers(arr, func){
    if(func === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arr)
    }else if(func === returnLastTwoDrivers){
        return returnLastTwoDrivers(arr)
    }else{
        return "sucks to suck!";
    }
}

