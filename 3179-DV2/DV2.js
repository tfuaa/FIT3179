var vg_1 = "3179-DV2/PM25_overview.json";
var vg_2 = "3179-DV2/pm25_map.json";
var vg_3 = "3179-DV2/pm25_lollipop.json";
var vg_4 = "3179-DV2/airqual_deaths.json"
var vg_5 = "3179-DV2/heatmap.json"
var vg_6 = "3179-DV2/airqual_deaths_scatter.json"
var vg_7 = "3179-DV2/pm25_calheatmap.json"
var vg_8 = "3179-DV2/airqual_cities.json"
var vg_9 = "3179-DV2/airqual_dotplot.json"
var vg_0 = "3179-DV2/airqual_bestworst.json"


vegaEmbed("#line_chart", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#map", vg_2).then(function(result) {
}).catch(console.error);

vegaEmbed("#lollipop", vg_3).then(function(result) {
}).catch(console.error);

vegaEmbed("#worldmap", vg_4).then(function(result) {
}).catch(console.error);

vegaEmbed("#heatmap", vg_5).then(function(result) {
}).catch(console.error);

vegaEmbed("#scatter", vg_6).then(function(result) {
}).catch(console.error);

vegaEmbed("#cal_heatmap", vg_7).then(function(result) {
}).catch(console.error);

vegaEmbed("#citiesmap", vg_8).then(function(result) {
}).catch(console.error);

vegaEmbed("#dotplot", vg_9).then(function(result) {
}).catch(console.error);

vegaEmbed("#bar", vg_0).then(function(result) {
}).catch(console.error);
