import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { New } from '../models/section.model';
import Swal from 'sweetalert2';
import { Documento } from '../models/document.model';

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

  documents = new BehaviorSubject<Documento[]>([]);

  constructor(private readonly db: AngularFirestore) {
    
    this.newsTaxs = this.db.collection("Impuestos").valueChanges();
    this.newsElectronic = this.db.collection("Firma Eléctronica").valueChanges();
    this.newsTips = this.db.collection("Consejos de Ahorro").valueChanges();
    this.newsInvoices = this.db.collection("Facturas").valueChanges();
    this.newsCredit = this.db.collection("Tarjetas de crédito").valueChanges();
    this.newsMain = this.db.collection("Principales").valueChanges();

  }

  loadCollection(collection: string) {

    let docs: Documento[] = [];

    this.db.collection(collection).get().subscribe(
      (res) => {

        res.docs.forEach((doc)=> {

          const docu = new Documento();
          docu.id = doc.id;
          docu.new.title = doc.data()["title"];
          docu.new.content = doc.data()["content"];
          docs.push(docu);
        
        })

        this.documents.next(docs);

      }
    );

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
        this.handleError("La colección requerida no existe", "Solicitud de información inexistente")
        break;
    }

  }

  addNew(element: New, where: string): void {

    this.newsCollection = this.db.collection(where);
    this.newsCollection.add(element).then(
      (response) => {
        Swal.fire('NOTICIA GUARDADA', 'CIERRA EL DIALOGO', 'success')
      }
    ).catch(
      (error) => {
        this.handleError(error, "Error al guardar noticia en la base de datos")
      }
    )

  }

  updateDocument(document: Documento, collection: string) {

    this.db.collection(collection).doc(document.id).update(document.new).then(
      (res) => {
        this.loadCollection(collection);
        Swal.fire('DOCUMENTO ACTUALIZADO EXITOSAMENTE', 'CIERRA EL DIALOGO', 'success')
      }
    )
  
  }


  deleteDocument(document: Documento, collection: string) {

    this.db.collection(collection).doc(document.id).delete().then(
      (res) => {
        this.loadCollection(collection);
        Swal.fire('DOCUMENTO ELIMINADO EXITOSAMENTE', 'CIERRA EL DIALOGO', 'success')
      }
    )
  
  }


  // error = message to programmer, message = message to user
  handleError(error: any, message: string) {

    Swal.fire('OCURRIÓ UN ERROR', `${message}`, 'error');
    console.warn(error);

  }

}
