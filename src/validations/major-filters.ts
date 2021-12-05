/**
 * Check if Major Filter arguments are valid
 * None of the arguments are case sensitive, according to USGS
*/
export function isValidMajorFilter(filterType: any, ...filter: any[]): boolean {
  if (!filter.length) {
    return false;
  }
  console.log(typeof filter[0]);
  console.log(filterType,filter);
  filterType=filterType.toString().toLowerCase();

  switch (filterType) {
    case 'site': {
      return isValidSite(filter);
    }
    case 'state': {
      return isValidState(filter);
    }
    case 'huc': {
      return isValidHuc(filter);
    }
    case 'coord': {
      return isValidCoord(filter);
    }
    case 'county': {
      return isValidCounty(filter);
    }
    default: {
      return false;
    }
  }
}

/**
 * Doesn't support the optional prefix 'USGS:' yet
 * @param filter Array of client input values
 * @returns Whether the input array has valid site codes
 */
function isValidSite(filter: any[]): boolean {
  for (let i = 0; i < filter.length; i++) {
    console.log(typeof filter[i] !== 'number' || filter[i].length<8 || filter[i].length>15);
    console.log(typeof filter[i]);
    if (typeof filter[i] !== 'number' || filter[i].length<8 || filter[i].length>15){
      return false;
    }
  }
  return true;
}

/**
 * @param filter Array of client input values
 * @returns Whether the input is a two char value
 */
function isValidState(filter: any[]): boolean {
  if (filter.length>1 || filter[0].length!=2){ 
    return false;
  }
  return true;
}

/**
 * You can specify one major huc and up to 10 minor hucs
 * Only checks input arguument lengths/types. Valid hucs are subject to change
 * @param filter 
 * @returns 
 */
function isValidHuc(filter: any[]): boolean {
  let majorHuc: number = 0;
  let minorHuc: number = 0;
  for (let i = 0; i < filter.length; i++) {
    if (typeof filter[i] === 'number' && filter[i].length === 2) {
      majorHuc++;
    }
    else if (typeof filter[i] === 'number' && filter[i].length === 8) {
      minorHuc++;
    }
    else {
      return false;
    }
  }
  return majorHuc<=1 && minorHuc<=10;
}

/**
 * 
 * @param filter Array of client input values
 * @returns Whether the input is in correct coordinates format
 * Must be format: W,S,E,N
 * 'the product of the range of latitude and longitude cannot exceed 25 degrees'
 * longitude must be between -180 and 180
 * latitude must be between -90 and 90
 */
function isValidCoord(filter: any[]): boolean {
  return filter.length === 4
    && typeof filter[0] === 'number'
    && typeof filter[1] === 'number'
    && typeof filter[2] === 'number'
    && typeof filter[3] === 'number'
    && filter[0] < filter[2]
    && filter[2] < 180
    && filter[0] > -180
    && filter[1] < filter[3]
    && filter[3] < 90
    && filter[1] > -90
    && (filter[2]-filter[0])*(filter[3]-filter[1])<=25;
}

function isValidCounty(filter: any[]): boolean {
  return true;
}