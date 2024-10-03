var vg_1 = "top_tourist_destinations_map.json";
var vg_2 = "tourism_incoming_2019_2024.json";

// Top tourist destinations map
vegaEmbed("#choropleth_map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// Pre vs Post COVID tourism numbers grouped bar chart
vegaEmbed("#grouped_bar", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);