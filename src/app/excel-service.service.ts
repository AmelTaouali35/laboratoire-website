import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import * as XLSX from "xlsx";

@Injectable({
  providedIn: "root",
})
export class ExcelService {
  constructor(private http: HttpClient) {}

  importExcel(file: File): Observable<any> {
    return new Observable((observer) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        try {
          const workbook = XLSX.read(e.target.result, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const data = XLSX.utils.sheet_to_json(sheet);

          // Process data as required and emit success
          observer.next(data);
          observer.complete();
        } catch (error) {
          observer.error(error);
        }
      };

      reader.readAsBinaryString(file);
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle HTTP errors or other errors
        return throwError("File import failed: " + error.message);
      })
    );
  }
}
