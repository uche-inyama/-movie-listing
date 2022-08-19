export const removeModal = () => {
  const modal = document.querySelector('.ReactModal__Content');
  const searchForm = document.querySelector('.search-form');
  const avatar = document.querySelector('.avatar');

  avatar.style.display="none";
  modal.style.display = "none";
  searchForm.style.display = "none";
}