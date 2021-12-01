import { isValidMajorFilter } from "./validations/major-filters";

export class WaterObject {
  private filterType: string = '';
  private filter: any[] = [];

  constructor() {}

  public async from(filterType: any, ...filter: any[]): Promise<any> {
    if (isValidMajorFilter(filterType, filter)) {
      this.filterType = filterType.toString();
      this.filter = filter;
      Promise.resolve();
    }
    Promise.reject(new Error("Major Filter arugments are invalid"));
  }
}