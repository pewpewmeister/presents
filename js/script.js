/* Работоспособность кнопки "Далее" и радио-индикаторов */
if (location.href.includes('full')) {
    document.querySelector('.toast').parentElement.removeChild(document.querySelector('.toast'));
}
  
window.addEventListener('load', event => {
    const onboarding = document.querySelector('.onboarding');
    const bookmarks = document.querySelectorAll("form input[type=\"radio\"]");
    const btnNext = document.querySelector("a.btn-next");
    btnNext.addEventListener("click", (e) => {
        const pageNumber = parseInt(getComputedStyle(onboarding).getPropertyValue('--page-number')) + 1;
        if (pageNumber < 5) {
            onboarding.style.setProperty('--page-number', pageNumber);
            bookmarks[pageNumber-1].checked = true;
        } else {
            onboarding.style.setProperty('--page-number', 1);
            bookmarks[0].checked = true;
        }
    });
});



const startPage = document.querySelector('.start-page');
startPage.onclick = function() {
    startPage.classList.add("start-page-off");
}

