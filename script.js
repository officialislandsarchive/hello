document.addEventListener("DOMContentLoaded", function () {
    // Define price guide data
    const priceGuideData = [
        { item: "🌳 Wood", priceRange: "1-2 coins each" },
        { item: "🪨 Stone", priceRange: "1-2 coins each" },
        { item: "⛏️ Iron Ore", priceRange: "2-4 coins each" },
        // Add more items here...
    ];

    // Function to generate price guide HTML
    function generatePriceGuideHTML(data) {
        let html = "";
        data.forEach(item => {
            html += `<div><strong>${item.item}:</strong> ${item.priceRange}</div>`;
        });
        return html;
    }

    // Display price guide
    const priceGuideDiv = document.getElementById("price-guide");
    priceGuideDiv.innerHTML = generatePriceGuideHTML(priceGuideData);
});
