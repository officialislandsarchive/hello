document.addEventListener("DOMContentLoaded", function () {
    const resourceData = [
        { item: "Wood", priceRange: "1-2 coins each" },
        { item: "Stone", priceRange: "1-2 coins each" },
        { item: "Iron Ore", priceRange: "2-4 coins each" },
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

    // Function to generate HTML for each list
    function generateListHTML(data, listElement) {
        let html = "";
        data.forEach(item => {
            html += `<li><strong>${item.item}:</strong> ${item.priceRange}</li>`;
        });
        listElement.innerHTML = html;
    }

    // Display data in respective lists
    generateListHTML(resourceData, resourcesList);
    generateListHTML(toolsData, toolsList);
    generateListHTML(weaponsData, weaponsList);
});
