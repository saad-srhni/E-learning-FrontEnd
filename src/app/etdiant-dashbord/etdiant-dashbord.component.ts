import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-etdiant-dashbord',
  templateUrl: './etdiant-dashbord.component.html',
  styleUrls: ['./etdiant-dashbord.component.css']
})
export class EtdiantDashbordComponent implements OnInit ,AfterViewInit{

  urlActive: string;
  constructor(private renderer: Renderer2, router: Router) { 
    
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) this.urlActive = event.urlAfterRedirects;
    });
   }
  ngAfterViewInit(): void {
    window.addEventListener("resize", () => { 
      if (window.screen.width < 768) {
        this.sidebar.nativeElement.collapse('hide');
      }
      if (window.screen.width < 480 &&
        !this.sidebar.nativeElement.classList.contains("toggled")) {
        document.body.classList.add("sidebar-toggled");
        this.sidebar.nativeElement.classList.add("toggled");
        }
    });
  }
  
  @ViewChild("sidebarToggleTop") sidebarToggleTop: ElementRef;

  @ViewChild("sidebarToggle") sidebarToggle: ElementRef;

  @ViewChild("sidebar") sidebar: ElementRef;

  ngOnInit(): void {
  }

  toggle() {
    document.body.classList.toggle("sidebar-toggled");
    this.sidebar.nativeElement.classList.toggle("toggled");
  }



}
