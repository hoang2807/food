document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll('.list-item a.item');

  const showMoreButton = document.getElementById('showmore');
  let visibleItemCount = 12;
  let totalItems = items.length;

  for (let i = 0; i < visibleItemCount; i++) {
    items[i].style.display = 'flex';
  }

  showMoreButton.addEventListener('click', function () {
    if (visibleItemCount < totalItems) {
      for (let i = visibleItemCount; i < visibleItemCount + 6 && i < totalItems; i++) {
        items[i].style.display = 'flex';
      }
      visibleItemCount += 12;
    } else {
      showMoreButton.style.display = 'none';
    }
  });
});