const initialCards = [{
name:"Val Thorens",
link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
},
{name:"Restaurant terrace",
  link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"
},
{name:"An outdoor cafe",
  link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"
},
{name:"A very long bridge, over the forest and through the trees",
  link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"
},
{name:"Tunnel with morning light",
  link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"
},
{name:"Mountain house",
  link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"
}
]

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


initialCards.forEach(function(item) {
console.log(item.name);
console.log(item.link);
});