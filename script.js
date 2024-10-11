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
        title: "Agrofloresta na Ecovila Sustentar",
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Página da Oficina de Agrofloresta da Ecovila Sustentar carregada!");
});
