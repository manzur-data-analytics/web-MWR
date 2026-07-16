import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    private bookingModalSubject = new BehaviorSubject<boolean>(false);

    bookingModal$ = this.bookingModalSubject.asObservable();

    openBookingModal() {
        this.bookingModalSubject.next(true);
    }

    closeBookingModal() {
        this.bookingModalSubject.next(false);
    }

}