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

const reduceRevenue = function (agg, driver, i, arr) {
  console.log('The aggregate up to this point is:', agg);
  console.log("The current element's name is:", el.name);
  console.log('The index of the current element is:', i);
  console.log('----------------');
 
  return [...agg, el.name];
};

const totalRevenue = function (drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.revenue-driver2.revenue
  });
};


