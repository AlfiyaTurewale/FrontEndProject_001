

function goToHomePage()
{
    window.location.href="home.html";
}

function goToServicePage()
{
    window.location.href="services.html";
 
}
function goToContactPage()
{
    window.location.href="contactus.html";
}
function goToAboutPage()
{
    window.location.href="aboutus.html";
}
function goToGalleryPage()
{
    window.location.href="gallery.html";
}
function goToLoginPage()
{
    window.location.href="login.html";
}

document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById('content');
    content.classList.add('show');
  });
  function showDetails(service) {
    // You can implement different actions based on the service clicked
    switch (service) {
        case 'petBoarding':
            alert('Details for Pet Boarding service');
            break;
        // Add more cases for other services if needed
        default:
            bresak;
    }
}


