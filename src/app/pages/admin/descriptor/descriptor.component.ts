/*
  Las mejoress ideas te llegan cuando ya no te queda tiempo xddddddddddddddddd
  */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { TemaService } from 'src/app/services/tema.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ExporterService } from 'src/app/services/exporter.service';
import { MaterialesService } from 'src/app/services/materiales.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-descriptor',
  templateUrl: './descriptor.component.html',
  styleUrls: ['./descriptor.component.css']
})
export class DescriptorComponent implements OnInit {

  dataSource = [];
  cursos: any = [];
  curso:any;
  cursoId:any;
  titulo:any;
  tema:any;
  temas:any = [];
  materiales:any = [];


  constructor(
    public dialog: MatDialog,
    private excelService:ExporterService,
    private cursoService:CursoService,
    private temaService:TemaService,
    private materialesService:MaterialesService,
    private route:ActivatedRoute) {

  }

  downloadPDF() {
    // Extraemos el
    const DATA : any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 8
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 30;
      const bufferY = 30;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}descriptor.pdf`);
    });
  }


  ngOnInit(): void {
    this.cursoId = this.route.snapshot.params['cursoId'];
    this.materialesService.listarMaterialesDelCurso(this.cursoId).subscribe(
      (data:any) => {
        console.log(data);
        this.materiales = data;
      },
      (error) => {
        console.log(error);
      }
    )
    this.temaService.listarTemasDelCurso(this.cursoId).subscribe(
      (data:any) => {
        console.log(data);
        this.temas = data;
      },
      (error) => {
        console.log(error);
      }
    )
    this.cursoService.listarCursos().subscribe(
      (dato:any) => {
        this.cursos = dato;
        console.log(this.cursos);
      },
      (error) => {
        console.log(error);

      }
    )
  }
   exportAsXLSX():void{
      this.excelService.exportToExcel(this.dataSource, 'my_export')
   }

   openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}
@Component({
  selector: 'instrucciones-dialog',
  templateUrl: 'instrucciones-dialog.html',
})
export class DialogElementsExampleDialog {}


