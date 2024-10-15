"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropDownDirective = void 0;
const core_1 = require("@angular/core");
let DropDownDirective = class DropDownDirective {
    // @HostListener('click') addClass (){
    //     this.isOpen = !this.isOpen;  // or  this.ElementRef.nativeElement.classList.toggle('open);
    // }
    toggleOpen(event) {
        this.isOpen = this.EleRef.nativeElement.contains(event.target) ? !this.isOpen : false;
        // console.log(event.target)
    }
    constructor(EleRef) {
        this.EleRef = EleRef;
        this.isOpen = false;
    }
};
exports.DropDownDirective = DropDownDirective;
__decorate([
    (0, core_1.HostBinding)('class.open')
], DropDownDirective.prototype, "isOpen", void 0);
__decorate([
    (0, core_1.HostListener)('document: click', ['$event'])
], DropDownDirective.prototype, "toggleOpen", null);
exports.DropDownDirective = DropDownDirective = __decorate([
    (0, core_1.Directive)({
        selector: '[appDropDown]'
    })
], DropDownDirective);
