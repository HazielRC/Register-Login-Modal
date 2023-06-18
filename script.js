const getElementById = (id) => document.getElementById(id);

const loginModal = getElementById("loginModal");
const loginButton = getElementById("loginLink");
const loginCloseButton = getElementById("closeLogin");
const registerModal = getElementById("registerModal");
const registerButton = getElementById("registerLink");
const registerCloseButton = getElementById("closeRegister");

const displayModal = (modal) => {
  modal.style.display = "block";
};

const hideModal = (modal) => {
  modal.style.display = "none";
};

loginButton.onclick = () => {
  displayModal(loginModal);
};

loginCloseButton.onclick = () => {
  hideModal(loginModal);
};

registerButton.onclick = () => {
  displayModal(registerModal);
};

registerCloseButton.onclick = () => {
  hideModal(registerModal);
};

window.onclick = (event) => {
  if (event.target === loginModal) {
    hideModal(loginModal);
  }
  if (event.target === registerModal) {
    hideModal(registerModal);
  }
};