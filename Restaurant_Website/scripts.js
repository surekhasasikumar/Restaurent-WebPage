document.addEventListener('DOMContentLoaded', function(){
    const bookingForm = document.getElementById("booking-form");

    bookingForm.add('submit', function(event){
        event.preventDefault();

        const name = document.getElementById('booking-name').value;
        const email = document.getElementById('booking-email').value;
        const phone = document.getElementById('booking-phone').value;
        const date = document.getElementById('booking-date').value;
        const time = document.getElementById('booking-time').value;
        const guests = document.getElementById('booking-guests').value;
        const occasion = document.getElementById('booking-occassion').value;
        const comments = document.getElementById('booking-comments').value;

        const bookingDetails = {
            name,
            email,
            phone,
            date,
            time,
            guests,
            occasion,
            comments
        };

        console.log('Booking details');

        alert('Thank you for your reservation, ' + name + '!\n We will contact you shortly.');

        bookingForm.reset();
    })
})