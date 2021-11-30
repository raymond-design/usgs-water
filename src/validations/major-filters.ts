/**
 * Check if Major Filter arguments are valid
 * None of the arguments are case sensitive, according to USGS
*/
export function isValidMajorFilter(filterType: any, ...filter: any[]): boolean {
  if (!filter.length) {
    return false;
  }

  filterType=filterType.toString().lowerCase();

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
    if (filter[i].length<8 || filter[i].length>15 || !/^-?\d+$/.test(filter[i].toString())){
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
  return true
}

function isValidCoord(filter: any[]): boolean {
  return true
}

function isValidCounty(filter: any[]): boolean {
  return true
}