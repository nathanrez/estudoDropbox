const modelosPorMarca = {
    audi: ["A3", "A4", "Q3"],
    bmw: ["130i", "320i", "M3", "X1", "X5"],
    chevrolet: ["Astra", "Camaro", "Celta", "Cobalt", , "Spin", "Corsa", "S10", "Tracker"],
    fiat: ["Uno", "Mobi", "500", "Strada", "Toro"],
    ford: ["Fiesta", "Fusion", "Escort", "Ecosport", "Ranger"],
    honda: ["Civic", "HRV", "Fit", "City"],
    mercedes: ["A200", "C180", "GLA200"],
    nissan: ["Versa", "Tiida", "Sentra", "L200"],
    toyota: ["Corolla", "Hillux", "Camry", "Etios"],
    volkswagen: ["Gol", "Golf", "Jetta", "Passat", "Voyage", "Fox", "Up!", "Nivus"]
};

function showModels() {
    const marcaSelecionada = document.getElementById('marca').value;
    const modeloDropdown = document.getElementById('modelo');

    modeloDropdown.innerHTML = '<option value="">Selecione o modelo</option>';

    if (marcaSelecionada && modelosPorMarca[marcaSelecionada]) {
        const modelosOrdenados = modelosPorMarca[marcaSelecionada].sort(); // Ordena em ordem alfabética
        modelosOrdenados.forEach(function(modelo) {
            const option = document.createElement('option');
            option.value = modelo.toLowerCase();
            option.text = modelo;
            modeloDropdown.appendChild(option);
        });
    }
}