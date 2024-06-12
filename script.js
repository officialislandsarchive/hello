document.addEventListener("DOMContentLoaded", function () {
    const resourceData = [
        { item: "Wood", priceRange: "1-2 coins each" },
        { item: "Stone", priceRange: "1-2 coins each" },
        { item: "Iron Ore", priceRange: "2-4 coins each" },
        { item: "Coal", priceRange: "2-4 coins each" },
        { item: "Wheat", priceRange: "1-2 coins each" },
        { item: "Pumpkin", priceRange: "1-2 coins each" },
        { item: "Berry Bush", priceRange: "1-2 coins each" },
        // Add more resource items here...
    ];

    const toolsData = [
        { item: "Wooden Pickaxe", priceRange: "50-100 coins each" },
        { item: "Stone Pickaxe", priceRange: "100-200 coins each" },
        { item: "Iron Pickaxe", priceRange: "200-300 coins each" },
        // Add more tool items here...
    ];

    const weaponsData = [
        { item: "Wooden Sword", priceRange: "50-100 coins each" },
        { item: "Stone Sword", priceRange: "100-200 coins each" },
        { item: "Iron Sword", priceRange: "200-300 coins each" },
        // Add more weapon items here...
    ];

    const resourcesList = document.getElementById("resources-list");
    const toolsList = document.getElementById("tools-list");
    const weaponsList = document.getElementById("weapons-list");

    // Function to generate HTML for each section
    function generateListHTML(data) {
        let html = "";
        data.forEach(item => {
            html += `<li><strong>${item.item}:</strong> ${item.priceRange}</li>`;
        });
        return html;
    }

    // Display data in respective sections
    resourcesList.innerHTML = generateListHTML(resourceData);
    toolsList.innerHTML = generateListHTML(toolsData);
    weaponsList.innerHTML = generateListHTML(weaponsData);
});
