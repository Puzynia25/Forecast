const PRESSURE_UNITS = 0.750062;

export const capitalizeFirstLetter = (str) => {
  if (!str)  return "";

  return str.charAt(0).toUpperCase() + str.slice(1)
};

export const getPressureMm = (hPa) => {
  return Math.round(hPa * PRESSURE_UNITS)
}

export const getTime = (seconds) => {
  return new Date(seconds * 1000).toLocaleTimeString('en-GB', { timeZone: 'Atlantic/Reykjavik' })
}


