import { Component } from '@angular/core';
import { Project } from '../../models/project.model';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-gallery',
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbModalModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  standalone: true
})
export class GalleryComponent {
  @ViewChild('imageModal') imageModal: any;
  selectedProject: Project | null = null;
  selectedImage: string | null = null;
  selectedImageIndex: number = 0;
  selectedProjectImages: string[] = [];


  constructor(private modalService: NgbModal) {}

openGallery(project: Project) {
  this.selectedProject = project;
  this.modalService.open(this.imageModal, { size: 'lg', centered: true });
}

openImageFullscreen(image: string, images: string[]): void {
  this.selectedProjectImages = images;
  this.selectedImageIndex = images.indexOf(image);
  this.selectedImage = image;
}

closeFullscreen(): void {
  this.selectedImage = null;
  this.selectedImageIndex = 0;
}

nextImage(): void {
  if (this.selectedImageIndex < this.selectedProjectImages.length - 1) {
    this.selectedImageIndex++;
  } else {
    this.selectedImageIndex = 0; // Optional: Schleife zurück zum ersten
  }
  this.selectedImage = this.selectedProjectImages[this.selectedImageIndex];
}

prevImage(): void {
  if (this.selectedImageIndex > 0) {
    this.selectedImageIndex--;
  } else {
    this.selectedImageIndex = this.selectedProjectImages.length - 1; // Letztes Bild
  }
  this.selectedImage = this.selectedProjectImages[this.selectedImageIndex];
}

  projects: Project[] = [
    {
      title: 'Zeichnungen im Semirealismus',
      category: 'zeichnung',
      images:[
        'assets/images/semi1.png',
        'assets/images/semi2.png',
        'assets/images/semi3.png',
        'assets/images/semi4.png',
        'assets/images/semi5.png'],
      description: 'Studien mit Fokus auf Licht, Schatten und anatomischer Genauigkeit.'
    },
    {
      title: '3D mit Blender',
      category: '3D',
      images: [
        'assets/images/3d1.png',
        'assets/images/3d2.png',
        'assets/images/3d3.png',
        'assets/images/3d4.png'
      ],
      description: 'Modelle, Shader und einfache Szenen - erste Schritte im 3D-Design.'
    },
    {
      title: 'Zeichnungen in meinem Stil',
      category: 'zeichnung',
      images: [
        'assets/images/myStyle1.png',
        'assets/images/myStyle2.png',
        'assets/images/myStyle3.png',
        'assets/images/myStyle4.png',
        'assets/images/myStyle5.png',
        'assets/images/myStyle6.png',
        'assets/images/myStyle7.png',
        'assets/images/myStyle8.png',
        'assets/images/myStyle9.png',
        'assets/images/myStyle10.png',
        'assets/images/myStyle11.png'
      ],
      description: 'Freie, persönliche Arbeiten - skizzenhaft, ausdrucksstark und intuitiv.'
    },
    {
      title: 'Zeichnungen im Cartoon Stil',
      category: 'zeichnung',
      images: [
        'assets/images/cartoon1.png',
        'assets/images/cartoon2.png',
        'assets/images/cartoon3.png',
        'assets/images/cartoon4.png',
        'assets/images/cartoon5.png',
        'assets/images/cartoon6.png',
        'assets/images/cartoon7.png',
        'assets/images/cartoon8.png',
        'assets/images/cartoon9.png',
        'assets/images/cartoon10.png'
      ],
      description: 'Reduzierte Formen, klarer Ausdruck - Charaktere im Cartoon-Stil.'
    }
  ];

  get filteredProjects() {
    return this.projects;
  }
  
}