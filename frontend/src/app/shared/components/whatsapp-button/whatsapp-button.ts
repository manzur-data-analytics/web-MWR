import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-whatsapp-button',
  imports: [TranslocoPipe],
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.css',
})
export class WhatsappButton {
  whatsappUrl(message: string): string {
    return `https://wa.me/5493883292382?text=${encodeURIComponent(message)}`;
  }
}
