import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Laboratoire } from "./laboratoire";
import { environment } from "src/environments/environment";
import { Produit } from "./produit";

@Injectable({
  providedIn: "root",
})
export class LaboratoirelistserviceService {
  private laboratoireApi = environment.baseUrl + "/labs";

  constructor(private httpClient: HttpClient) {}

  getLaboratoireList(): Observable<Laboratoire[]> {
    return this.httpClient.get<Laboratoire[]>(`${this.laboratoireApi}/getAll`);
  }

  getLaboratoireById(id: string): Observable<Laboratoire> {
    return this.httpClient.get<Laboratoire>(
      `${this.laboratoireApi}/getLab/${id}`
    );
  }

  updateLaboratoire(laboratoire: Laboratoire): Observable<Laboratoire> {
    return this.httpClient.put<Laboratoire>(
      `${this.laboratoireApi}/updateLab/${laboratoire.id}`,
      laboratoire
    );
  }

  deleteLaboratoire(id: string): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.laboratoireApi}/deleteLab/${id}`
    );
  }

  uploadExcelFile(file: File, code: string): Observable<any> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("code", code);

    return this.httpClient.post<any>(`${this.laboratoireApi}/upload`, formData);
  }

  setLaboratoireForCustomers(laboratoireCode: string): Observable<any> {
    return this.httpClient.post<any>(
      `${this.laboratoireApi}/setLaboratoireForCustomers`,
      laboratoireCode
    );
  }

  getAllProducts(laboratoireId: number): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(
      `${this.laboratoireApi}/getAllProducts/${laboratoireId}`
    );
  }
}
