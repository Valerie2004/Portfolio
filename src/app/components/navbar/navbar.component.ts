import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../../pages/home/home.component";
import { GalleryComponent } from "../../pages/gallery/gallery.component";
import { Component } from "@angular/core";

export const routes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'gallery', component: GalleryComponent}
];

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
    toggleMode(): void {
      console.log("Toggle Light Mode");
      document.body.classList.toggle('light-mode');
}
}


