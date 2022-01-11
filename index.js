const returnFirstTwoDrivers = (drivers) => {return drivers.slice(0,2)}
const returnLastTwoDrivers = (drivers) => {return drivers.slice(-2)}
let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(multi)
{
    return function(fare) {return fare*multi};
}
const fareDoubler = (fare) => {return createFareMultiplier(1)(fare)*2};
const fareTripler = (fare) => {return createFareMultiplier(1)(fare)*3};
function selectDifferentDrivers(drivers,fl)
{
    if(fl === returnFirstTwoDrivers)
    {
        return returnFirstTwoDrivers(drivers);
    }else if(fl === returnLastTwoDrivers)
    {
        return returnLastTwoDrivers(drivers);
    }
}