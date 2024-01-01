// Not all events bubble, like ref, focus etc
// e.target is the thing that is clicked
// e.currentTarget is the the thing whose alert is being executed
// this is the current target whose alert is being executed
// ( but for arrow func instead of func this will be the parent of func)
// Event Delegation

//
// MODAL TOGGLE
//

const modalButton = document.querySelector('.modalButton');
const modalContainer = document.querySelector('.modalContainer');

modalButton.addEventListener('click', (e) => {
  toggleModal(true, e);
});

modalContainer.addEventListener('click', (e) => {
  toggleModal(false, e);
});

const toggleModal = (prop, e) => {
  if (prop) {
    modalContainer.classList.add('open');
  } else {
    e.target.classList.contains('modal')
      ? ''
      : modalContainer.classList.remove('open');
  }
};

//
// Event Delegation
//
// const products = document.querySelector('.products');

// products.addEventListener('click', func);

// function func(e) {
//   alert(e.target.innerHTML);
// }

//
// EVENT CAPTURE
//

// const div = document.querySelector('.container');
// const background = document.querySelector('.background');
// const button = document.querySelector('.button');

// div.addEventListener('click', func, {
//   capture: true,
// });

// background.addEventListener('click', func, {
//   capture: true,
// });

// button.addEventListener('click', func, {
//   capture: true,
// });

// function func(e) {
//   alert(
//     'div clicked ' +
//       e.currentTarget.tagName +
//       ' ' +
//       e.target.tagName +
//       ' ' +
//       this.tagName
//   );
// }

//
// THIS IS EXMPLAIN HERE AND WHY IT WON'T WORK WITH ARROW FUNCTIONS
//

// const div = document.querySelector('.container');
// const background = document.querySelector('.background');
// const button = document.querySelector('.button');

// div.addEventListener('click', func);
// background.addEventListener('click', func);
// button.addEventListener('click', func);

// function func(e) {
//   alert(
//     'div clicked ' +
//       e.currentTarget.tagName +
//       ' ' +
//       e.target.tagName +
//       ' ' +
//       this.tagName
//   );
// }

// BASICS

// const div = document.querySelector('.container');
// const background = document.querySelector('.background');
// const button = document.querySelector('.button');
// button.addEventListener('click', (e) => {
// //   e.stopPropagation();
//   alert(
//     'div clicked ' +
//       e.currentTarget.tagName +
//       ' ' +
//       e.target.tagName +
//       ' ' +
//       this.tagName
//   );
// });

// background.addEventListener('click', (e) => {
//   alert(
//     'div clicked ' +
//       e.currentTarget.tagName +
//       ' ' +
//       e.target.tagName +
//       ' ' +
//       this.tagName
//   );
// });

// div.addEventListener('click', (e) =>
//   alert(
//     'div clicked ' +
//       e.currentTarget.tagName +
//       ' ' +
//       e.target.tagName +
//       ' ' +
//       this.tagName
//   )
// );
