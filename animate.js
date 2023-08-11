
const observer = new IntersectionObserver((entries) =>  {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        
        //. this is used if we want to show the animation multiple times//else {
        //    entry.target.classList.remove('show');
        //}
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));