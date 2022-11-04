import { Directive, ElementRef, OnInit, HostListener, Renderer2, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['event']) toggleOpen(eventData: Event){
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false
    }
    constructor(private elRef: ElementRef){}
}