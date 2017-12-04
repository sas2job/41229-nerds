var feedbackLink = document.querySelector(".contacts-feedback");
var feedback = document.querySelector(".modal-message-back");
var feedbackModal = feedback.querySelector(".modal-message");
var messageForm = feedback.querySelector("form");
var messageName = feedback.querySelector("#message-name");
var messageEmail = feedback.querySelector("#message-email");
var messageText = feedback.querySelector("#message-text");
var feedbackClose = feedback.querySelector(".modal-close");
var localMessageName = localStorage.getItem("messageName");
var localMessageEmail = localStorage.getItem("messageEmail");

feedbackLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedback.classList.add("modal-show");
  if (localMessageName) {
    messageName.value = localMessageName;
  } else {
    messageName.focus();
  }
  if (localMessageEmail) {
    messageEmail.value = localMessageEmail;
    messageText.focus();
  }
});

feedbackClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedback.classList.remove("modal-show");
  feedbackModal.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (feedback.classList.contains("modal-show")) {
      feedback.classList.remove("modal-show");
      feedbackModal.classList.remove("modal-error");
    }
  }
});

messageForm.addEventListener("submit", function(evt) {
  if (!messageName.value || !messageEmail.value || !messageText.value) {
    evt.preventDefault();
    feedbackModal.classList.remove("modal-error");
    feedbackModal.offsetWidth = feedbackModal.offsetWidth;
    feedbackModal.classList.add("modal-error");
  } else {
    localStorage.setItem("messageName", messageName.value);
    localStorage.setItem("messageEmail", messageEmail.value);
  }
});
