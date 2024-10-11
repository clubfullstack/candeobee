// Inicializa o mapa do Google Maps
function initMap() {
    const ecovilaLocation = { lat: -23.563210, lng: -46.654250 }; // Coordenadas da Ecovila
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: ecovilaLocation,
    });
    const marker = new google.maps.Marker({
        position: ecovilaLocation,
        map: map,
        title: "Ecovila Sustentar",
    });
}

// Lidar com o envio do formulário
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter os valores dos campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const message = document.getElementById("message").value;

    // Construir a URL do WhatsApp com os dados
    const whatsappUrl = `https://wa.me/5511999999999?text=
        Nome: ${encodeURIComponent(name)}%0A
        Email: ${encodeURIComponent(email)}%0A
        Whatsapp: ${encodeURIComponent(whatsapp)}%0A
        Mensagem: ${encodeURIComponent(message)}`;

    // Redirecionar para o WhatsApp
    window.open(whatsappUrl, '_blank');
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Página da Oficina Ecovila Sustentar carregada!");
});
