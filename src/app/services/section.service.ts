import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { New } from '../models/section.model';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  // Estos obervables contienen las noticias de todas las secciones
  // Para ver que contienen, entren a la ruta /add-new y en consola estará lo que contienen
  newsTaxs: Observable<unknown[]>;
  newsElectronic: Observable<unknown[]>;
  newsTips: Observable<unknown[]>;
  newsInvoices: Observable<unknown[]>;
  newsCredit: Observable<unknown[]>;
  newsMain: Observable<unknown[]>;

  newsCollection: AngularFirestoreCollection<New>;

  constructor(private readonly db: AngularFirestore) {
    
    this.newsTaxs = this.db.collection("Impuestos").valueChanges();
    this.newsElectronic = this.db.collection("Firma Eléctronica").valueChanges();
    this.newsTips = this.db.collection("Consejos de Ahorro").valueChanges();
    this.newsInvoices = this.db.collection("Facturas").valueChanges();
    this.newsCredit = this.db.collection("Tarjetas de crédito").valueChanges();
    this.newsMain = this.db.collection("Principales").valueChanges();

  }

  // Recibe como argumento el número de la colección que se retornará
  getNews(collection: number) {
    
    switch (collection) {
      case 0:
        return this.newsTaxs;
      case 1:
        return this.newsElectronic;
      case 2:
        return this.newsTips;
      case 3:
        return this.newsInvoices;
      case 4:
        return this.newsCredit;
      case 5:
        return this.newsMain;
      default:
        break;
    }

  }

  addNew(element: New, where: string) {

    this.newsCollection = this.db.collection(where);
    this.newsCollection.add(element);

  }


}
