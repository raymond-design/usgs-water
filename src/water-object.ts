import { isValidMajorFilter } from "./validations/major-filters";

export class WaterObject {
  private filterType: string = '';
  private filter: any[] = [];

  constructor() {}

  /**
   * Make calls using the previously set filters
   */
  public async again(): Promise<any> {
    //check that required filters exist
    //make call to api
  }

  /**
   * @returns Current object's set filters and args
   */
  public show(): object {
    //temporary !
    return {
      filter: this.filter,
      filterType: this.filterType
    };
  }

  /**
   * Check and set Major Filters to the Water Object
   * @param filterType site type
   * @param filter arbitrary number of major filter arguments put in an array
   * @returns Whether the user-inputted filter arguments were valid
   */
  public async from(filterType: any, ...filter: any[]): Promise<any> {
    console.log("HHH:", filter);
    return new Promise((resolve, reject) => {
      if (isValidMajorFilter(filterType, filter)) {
        this.filterType = filterType.toString();
        this.filter = filter;
        return resolve("Major Filter Added");
      } else {
        return reject(new Error('Invalid filter type'));
      }
    });
  }

  /**
   * Accept all the optional values for the api call
   * This function is as simple as possible by default
   */
  public async get() {

  }
}