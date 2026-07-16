import { Component, inject, signal } from '@angular/core';
import { ModalService } from '../../../shared/services/modal-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-booking-modal',
  imports: [FormsModule, CommonModule, TranslocoPipe],
  templateUrl: './booking-modal.html',
  styleUrl: './booking-modal.css',
})
export class BookingModal {

  private modalService = inject(ModalService);
  private transloco = inject(TranslocoService);

  visible = false;

  ngOnInit() {

    this.modalService.bookingModal$
      .subscribe(v => this.visible = v);

  }

  languages = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português' },
  ];


  private langMenuOpen = signal(false);

  isLangMenuOpen = this.langMenuOpen.asReadonly();


  toggleLangMenu() {
    this.langMenuOpen.update(v => !v);
  }


  closeLangMenu() {
    this.langMenuOpen.set(false);
  }


  close() {
    this.modalService.closeBookingModal();
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