import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective {
    @HostBinding('class.open') isOpen = false;

    // @HostListener('click') addClass (){
    //     this.isOpen = !this.isOpen;  // or  this.ElementRef.nativeElement.classList.toggle('open);
    // }
    @HostListener('document: click',['$event']) toggleOpen(event: Event){
         this.isOpen = this.EleRef.nativeElement.contains(event.target)? !this.isOpen: false;
        // console.log(event.target)
    }
    constructor(private EleRef: ElementRef) { }
    
}