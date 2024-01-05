var typed = new Typed((".skills"),{
    strings : ["Web Developer", "Programmer", "Web Designer"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 100,
    loop : true
})
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the default form submission

        // You can add additional validation or send the form data to a server here
        // For simplicity, let's just log the form data to the console
        console.log('Name:', form.elements.name.value);
        console.log('Email:', form.elements.email.value);
        console.log('Message:', form.elements.message.value);

        // You can add an AJAX request or any other logic here to handle form submission
    });
});
