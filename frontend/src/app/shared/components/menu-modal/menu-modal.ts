import { AfterViewInit, Component, Directive, ElementRef, HostListener, Injectable, OnDestroy, ViewChild, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { Subject, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenuModalService {
  readonly openRequests = new Subject<void>();
}

@Directive({ selector: 'a[appMenuModal]' })
export class MenuModalLink {
  private readonly modal = inject(MenuModalService);

  @HostListener('click', ['$event'])
  open(event: MouseEvent): void {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || !window.matchMedia('(min-width: 1024px)').matches) return;
    event.preventDefault();
    this.modal.openRequests.next();
  }
}

@Component({
  selector: 'app-menu-modal',
  imports: [TranslocoPipe],
  templateUrl: './menu-modal.html',
  styleUrl: './menu-modal.css',
})
export class MenuModal implements AfterViewInit, OnDestroy {
  @ViewChild('dialog', { static: true }) private dialog!: ElementRef<HTMLDialogElement>;
  private readonly modal = inject(MenuModalService);
  private subscription?: Subscription;
  isOpen = false;

  ngAfterViewInit(): void {
    this.subscription = this.modal.openRequests.subscribe(() => {
      if (!this.dialog.nativeElement.open) {
        this.isOpen = true;
        this.dialog.nativeElement.showModal();
      }
    });
  }

  close(): void { this.dialog.nativeElement.close(); }
  onClosed(): void { this.isOpen = false; }
  onBackdrop(event: MouseEvent): void {
    if (event.target === this.dialog.nativeElement) this.close();
  }
  ngOnDestroy(): void { this.subscription?.unsubscribe(); }
}
