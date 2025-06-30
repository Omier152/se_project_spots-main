const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const newPostBtn= document.querySelector(".profile__new-post-btn");
const newPostModal =document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileFormElement =document.querySelector('#edit-profile-modal__form');
const nameInput =editProfileModal.querySelector("#profile__name-input");
const jobInput = editProfileModal.querySelector("#profile__description-input");

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(".profile__description");
const newPostFormElement = document.querySelector("#new-post-modal .modal__form");

const newPostImageInput = newPostModal.querySelector("#card__image-input");
const newPostCaptionInput = newPostModal.querySelector("#card__caption-input");

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener("click",function() {
    openModal(editProfileModal);
    nameInput.value=profileNameElement.textContent;
    jobInput.value=profileDescriptionElement.textContent;
    
} );

editProfileCloseBtn.addEventListener("click",function(){
    closeModal(editProfileModal);
});



newPostBtn.addEventListener("click",function() {
    openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click",function() {
    closeModal(newPostModal);
});

function handleProfileFormElementSubmit(evt) {
  evt.preventDefault();

  profileNameElement.textContent = nameInput.value;
    profileDescriptionElement.textContent = jobInput.value;
   closeModal(editProfileModal);
}

newPostFormElement.addEventListener("submit", function(evt) {
   evt.preventDefault();
    console.log("Image URL", newPostImageInput.value);
    console.log("Caption",newPostCaptionInput.value);
     closeModal(newPostFormElement);
evt.target.reset();
});

profileFormElement.addEventListener('submit', handleProfileFormElementSubmit);
