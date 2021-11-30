import { isValidMajorFilter } from "./validations/major-filters";

export class WaterObject {
  constructor(private filterType: null, private filter: any[]) {}

  public async from(filterType: any, ...filter: any[]): Promise<any> {
    if (isValidMajorFilter(filterType, filter)) {
      this.filterType = filterType;
      this.filter = filter;
    }
  }
}