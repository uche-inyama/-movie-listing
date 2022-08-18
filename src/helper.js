export const setClassName = (args) => {
  const container = document.querySelector('.container');
  switch(args) {
    case 'authenticated':
      container.removeAttribute('.container');
      container.setAttribute('className', 'container-authenticated')
      break;
    case 'not-authenticated':
      container.removeAttribute('.container');
      container.setAttribute('className', 'container-not-authenticated')
      break;
    default:
      break;
  }
}