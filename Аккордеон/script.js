'use strict';

const accordionContainer = '#accordion';
const accordionContent = '#accordion div';

class Accordion {
    constructor(container, content) {
        this.container = document.querySelector(container);
        this.contentAll = document.querySelectorAll(content);
    }
    properties() {
        this.headers = this.container.querySelectorAll('h3');
    }
    headerDeactivate(elem) {
        elem.classList.remove('active');
        console.log(elem);
    }
    headerDeactivateInit() {
        this.contentAll.forEach(this.headerDeactivate.bind(this))
    }
    headerClickNextToggle(elem) {
        this.headerDeactivateInit();
        elem.target.nextElementSibling.classList.toggle('active');
    }
    headerClick(elem) {
        elem.addEventListener('click', this.headerClickNextToggle.bind(this));
    }
    clickInit() {
        this.headers.forEach(this.headerClick.bind(this));
    }
    startUpClassAdd(elem) {
        elem.classList.remove('active');
    }
    startUp() {
        let allDivs = this.container.querySelectorAll('div');
        allDivs.forEach(this.startUpClassAdd.bind(this));
        allDivs[0].classList.add('active');
    }
    init() {
        this.properties();
        this.clickInit();
        this.startUp();
    }
}

const accordion = new Accordion (accordionContainer, accordionContent)

accordion.init();

console.dir(document.querySelector('h3'))