var vg_1 = "top_tourist_destinations_map.json";
var vg_2 = "tourism_incoming_2019_2024.json";
var vg_3 = "aus_arrivals_departures.json";
var vg_4 = "reasons_for_travel.json";
var vg_5 = "visitor_demographics.json";


// Top tourist destinations - map
vegaEmbed("#choropleth_map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// Pre vs Post COVID tourism numbers - grouped bar chart
vegaEmbed("#grouped_bar", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// Australia arrival and departure numbers - line chart
vegaEmbed("#line_chart", vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// Reasons for coming to Australia - bar chart
vegaEmbed("#bar_chart", vg_4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// What countries visitors come from - treemap
vegaEmbed("#tree_map", vg_5).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);