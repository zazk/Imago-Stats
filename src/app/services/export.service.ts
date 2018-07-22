import { Injectable } from '@angular/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Injectable()
export class ExportService {
  constructor() {}
  export(filename: string, items: any[], headers?: any[]) {
    const options = {
      ...this.exportOptions,
      headers: headers
    };
    const result = new Angular2Csv(items, filename, options);
  }

  get exportOptions(): any {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: false,
      useBom: false
    };
    return options;
  }
}
