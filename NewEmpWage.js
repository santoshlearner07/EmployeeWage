function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HRS;
}

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HRS = 20;
const NUM_OF_WORKING_DAYS = 20;
const Max_HRS_IN_MOnth = 160;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HRS;
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
        default:
            return 0;
    }
}   

let totalEmphrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
while(totalEmphrs<=Max_HRS_IN_MOnth &&
    totalWorkingDays< NUM_OF_WORKING_DAYS){
        totalWorkingDays++
        let empCheck = Math.floor(Math.random() * 10) % 3;
       let empHrs = getWorkingHours(empCheck);
        totalEmphrs += empHrs;
        empDailyWageArr.push(calcDailyWage(empHrs)) 
        empDailyWageMap.set(totalWorkingDays,empHrs);
        empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs));
    }
// for(let day =0; day< NUM_OF_WORKING_DAYS;day++) {
//     let empCheck = Math.floor(Math.random() * 10) % 3;
//     totalEmphrs += getWorkingHours(empCheck);
// }
    let empWage = calcDailyWage(totalEmphrs);
    // console.log("Hours -> " +  totalEmphrs +"Emp Wage ->" + empWage);
    console.log("UC6 =>  Total Days ->" + totalWorkingDays + 
    " Total Hrs ->" + totalEmphrs + " EMP Wage ->" + empWage);

    // Array helper function
    let totEmpWage = 0;
    function sum(dailyWage) {
        totEmpWage += dailyWage;
    }
    empDailyWageArr.forEach(sum);
    console.log("UC7 for each =>  Total Days ->" + totalWorkingDays + 
    " Total Hrs ->" + totalEmphrs + " EMP Wage ->" + totEmpWage);

    function totalWages(totalWage, dailyWage){
        return totalWage + dailyWage
    }
    console.log("UC7 reduce method =>  Total Days ->" + totalWorkingDays + 
    " Total Hrs ->" + totalEmphrs + " EMP Wage ->" + totEmpWage);
    // Array Map
    let dailycntr = 0;
    function mapDayWithWage(dailyWage) {
        dailycntr++;
        return dailycntr + " = " + dailyWage;
    }
    let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
    console.log("UC7  - Daily Wage Map")
    console.log(mapDayWithWageArr)

    // filter function 
    function fullTimewage(dailyWage) {
        return dailyWage.includes("160");
    }
    let fullDayWageArr = mapDayWithWageArr.filter(fullTimewage);
    console.log("UC7 -> Daily Wage Filter when full time worked");
    console.log(fullDayWageArr)

    // first time 160
    function fullTimewage(dailyWage) {
        return dailyWage.includes("160");
    }
    console.log("UC7D first time 160 day -> "
     + mapDayWithWageArr.find(fullTimewage));

    function isAllFullTimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    console.log("UC7E Check all element have full time "
    + fullDayWageArr.every(isAllFullTimeWage))

    // Part time 80
    function isAnyPartTimeWage(dailyWage){
        return dailyWage.includes("80")
    }
    console.log("UC7F Part Time " + 
    mapDayWithWageArr.some(isAnyPartTimeWage))

    // num days employee worked
    function totalDaysWorked(numOfDays, dailyWage) {
        if (dailyWage > 0) return numOfDays + 1;
        return numOfDays;
    }

    console.log("UC 7G => number of days " + 
    empDailyWageArr.reduce(totalDaysWorked,0));

    // using map 
    console.log("UC8 - Emp wage map Totalhrs = " +
    Array.from(empDailyWageMap.values()).reduce(totalWages,0));

    // Arrow functions
    const findTotal = (totalVal, dailyVal) => {
        return totalVal + dailyVal;
    }
    let totalHours = Array.from(empDailyHrsMap.values())
                    .filter(dailyHours => dailyHours > 0)
                    .reduce(findTotal,0);
    let totalSalary = empDailyWageArr
                    .filter(dailyWage => dailyWage > 0)
                    .reduce(findTotal,0);
        console.log("UC9 - Emp Wage with Arrow : " + " Total Hours: " + 
        totalHours + " Total Wages: " + totalSalary);