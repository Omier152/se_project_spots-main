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
},
{
  name:"Golden gate bridge",
  link:" https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg"
}
]

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close");

const newPostBtn= document.querySelector(".profile__new-post-btn");
const newPostModal =document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close");

const profileFormElement = editProfileModal.querySelector(".modal__form");
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
 
const cardTemplate=document.querySelector("#card-template")
.content.querySelector(".card");
const cardList = document.querySelector(".cards__list");

const previewModal =document.querySelector("#preview-modal");
const previewCloseModalBtn=previewModal.querySelector(".modal__close");
const previewImage=previewModal.querySelector(".modal__image");
const previewCaption=previewModal.querySelector(".modal__caption");

function getCardElement(data){
  const cardElement=cardTemplate.cloneNode(true);
  const cardTitle=cardElement.querySelector(".card__title");
  const cardImage=cardElement.querySelector(".card__image");
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  const cardLikeBtn=cardElement.querySelector(".card__like-btn");
  cardLikeBtn.addEventListener("click", () => { 
    cardLikeBtn.classList.toggle("card__like-btn-active");
  });

  const cardDeleteBtn = cardElement.querySelector(".card__delete-btn");
  cardDeleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImage.addEventListener("click", () => {
    previewImage.src = data.link;
    previewImage.alt = data.name;
    previewCaption.textContent = data.name;
    openModal(previewModal);
  });
  //style the cardDeleteBtn
  return cardElement;
}

editProfileBtn.addEventListener("click",function() {
  openModal(editProfileModal);
  nameInput.value=profileNameElement.textContent;
  jobInput.value=profileDescriptionElement.textContent;
});

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
  const cardElement=getCardElement({
    name: newPostCaptionInput.value,
    link: newPostImageInput.value
  });
  cardList.prepend(cardElement);
  closeModal(newPostModal);
  evt.target.reset();
});

profileFormElement.addEventListener('submit', handleProfileFormElementSubmit);

initialCards.forEach(function(item) {
  const cardElement= getCardElement(item);
  cardList.append(cardElement);
});

