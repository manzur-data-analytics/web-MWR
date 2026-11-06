import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { TranslocoService } from '@jsverse/transloco';
import { inject } from '@angular/core';
import { ModalService } from '../../shared/services/modal-service';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface NavItem {
  label: string;
  route?: string;
  children?: { label: string; route: string }[];
  isOpen?: boolean;
}

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, TranslocoPipe, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {

  private transloco = inject(TranslocoService);
  private modalService = inject(ModalService);

  openBookingModal() {

    this.modalService.openBookingModal();

  }

  // --- Estado existente (ya lo tenías) ---
  scrolled = false;
  mobileMenuOpen = false;

  // --- Estado del dropdown de idiomas ---
  private langMenuOpen = signal(false);
  isLangMenuOpen = this.langMenuOpen.asReadonly();

  navItems: NavItem[] = [
    { route: '/', label: 'NAVBAR.INICIO' },
    { route: '/alojamiento', label: 'NAVBAR.ALOJAMIENTO' },
    { route: '/gastronomia', label: 'NAVBAR.GASTRONOMIA' },
    { route: '/eventos', label: 'NAVBAR.EVENTOS' },
    { route: '/spa', label: 'NAVBAR.SPA' },
    { route: '/experiencias', label: 'NAVBAR.EXPERIENCIAS' },
    {
      label: 'NAVBAR.NOSOTROS',
      isOpen: false, // Controla si se abre en mobile
      children: [
        { label: 'Nosotros 1', route: '/nosotros' },
        { label: 'Nosotros 2', route: '/nosotros-2' }
      ]
    },
  ];

  languages = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português' },
  ];

  toggleLangMenu() {
    this.langMenuOpen.update(v => !v);
  }

  closeLangMenu() {
    this.langMenuOpen.set(false);
  }


  // --- Ya lo tenías, pero le sumamos el cierre del dropdown de idioma ---
  navLinkClass(): string {
    return this.scrolled
      ? 'text-stone-800 hover:opacity-70'
      : 'text-white hover:opacity-70';
  }

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMenu() {
    this.mobileMenuOpen = false;
  }

  // --- Nuevo: accesibilidad — cerrar drawer y dropdown con Escape ---
  @HostListener('document:keydown.escape')
  onEscapePress() {
    this.mobileMenuOpen = false;
    this.closeLangMenu();
  }

  // --- Nuevo: accesibilidad — cerrar dropdown de idioma al clickear afuera ---
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('[aria-haspopup="true"]') && !target.closest('[role="menu"]')) {
      this.closeLangMenu();
    }
  }


  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 30;
  }

  //Traducir
  changeLanguage(lang: string) {
    this.transloco.setActiveLang(lang);

    localStorage.setItem(
      'language',
      lang
    );
  }

  currentLanguage() {
    return this.transloco.getActiveLang();
  }

}