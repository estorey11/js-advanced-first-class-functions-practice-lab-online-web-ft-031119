// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};


const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown===location){console.log(driver.name);}
  });
};

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.revenue-driver2.revenue
  });
};

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name)
  });
};

const reduceRevenue = function (agg, el, i, arr) {
  return agg + el.revenue;
};



const totalRevenue = function (drivers) {
  return drivers.reduce(reduceRevenue, 0)
};

const averageRevenue= function(drivers){
  return totalRevenue(drivers)/drivers.length
}
