/*let lastScroll = 0;
const defaultOffset = 2000;
const header = document.querySelector ('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
//scroll down
header.classList.add('hide');
console.log('down');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        console.log('up');
        header.classList.remove('hide');
    }
    
    lastScroll = scrollPosition();
});
*/


/*const dialog = document.getElementById('zapis_button')

dialog.onclick = function () {
    show ('dialogzapis')
}*/


/*const dialog = document.getElementById('dialogzapis');
const btn = document.getElementById('zapisbutt');
btn.onclick = function(){
    showModal() 
        
};*/

/*var btn = document.querySelector('opendialog')
    var dialog = document.querySelector('mydialog')
    btn.onclick = function () {}
    document.querySelector('opendialog').onclick = function () {
        dialog.show() 
    }


  /* function toggleVisibility() {
    let element = document.getElementById('dialogzapis');
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
} */

    const scrollToTopBtn = document.getElementById('scrollToTop');
 scrollToTopBtn.addEventListener ('click', () => {
window.scrollTo (0, 0)
 });

 const openButton = document.getElementById('openDialog');
 const closeButton = document.getElementById('closeDialog');
 const Dialog = document.getElementById('myDialog');

 openButton.addEventListener  ('click', () => {
    Dialog.showModal();
 }); 
 closeButton.addEventListener  ('click', () => {
    Dialog.close();
 }); 

 const exitDialog = document.getElementById('X');
 exitDialog.addEventListener  ('click', () => {
    Dialog.close();
 }); 

 const openBut = document.getElementById('BtnOpenDia');
 const closeBut = document.getElementById('closeDialog');
 const Dia = document.getElementById('myDia');

 openBut.addEventListener  ('click', () => {
    Dia.showModal();
 }); 
 closeBut.addEventListener  ('click', () => {
    Dia.close();
 }); 



 const open_Button = document.getElementById('btn_dia');
 const close_Button = document.getElementById('Xdia');
 const MenuDialog = document.getElementById('dia_menu');


 open_Button.addEventListener  ('click', () => {
    MenuDialog.showModal();
 }); 
 close_Button.addEventListener  ('click', () => {
    MenuDialog.close();
 }); 

 const close_menu = document.getElementById('Menu_list-dia')
close_menu.addEventListener  ('click', () => {
    MenuDialog.close();
 }); 