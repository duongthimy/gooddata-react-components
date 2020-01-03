// (C) 2007-2020 GoodData Corporation

const demoProject = {
    "https://secure.gooddata.com": "k26dtejorcqlqf11crn6imbeevp2q4kg",
    "https://staging3.intgdc.com": "ht3owbpk6h0yfjtkcsgva3osu3z7paol",
    "https://staging2.intgdc.com": "exveshu0intwbr4nk6ao8ft6vesjiqus",
    "https://staging.intgdc.com": "na1q8a0q4efb7cajbgre9mmm776dr1yv",
    "https://developer.na.gooddata.com": "xms7ga4tf3g3nzucd8380o2bev8oeknp",
};

const backendUrl = BACKEND_URL; // eslint-disable-line no-undef
const demoProjectId = demoProject[backendUrl];
if (!demoProjectId) {
    console.error(`[fixtures.js] ProjectId for backend "${backendUrl}" is not in `, demoProject); // eslint-disable-line no-console
}

console.log("The /gdc proxy is connected to: ", backendUrl, " with projectId: ", demoProjectId); // eslint-disable-line no-console

// your projectId would be probably static (you may ignore the code above)

export const backendUrlForInfo = backendUrl;
export const projectId = demoProjectId;

export const averageCheckSizeByServer = "afewRzGAersh";
export const averageDailyTotalSales = "aagJGHg1bxap";
export const barVisualizationIdentifier = "aabESA6qfobY";
export const barVisualizationUri = `/gdc/md/${demoProjectId}/obj/10177`;
export const dualAxisBarVisualizationIdentifier = "acSoPx4Mc7Rr";
export const lineVisualizationIdentifier = "aaeERg1qcRuX";
export const lineVisualizationUri = `/gdc/md/${demoProjectId}/obj/10178`;
export const areaVisualizationIdentifier = "aabETaqQdz6J";
export const areaVisualizationUri = `/gdc/md/${demoProjectId}/obj/10179`;
export const headlineVisualizationIdentifier = "aamERm18cRvs";
export const headlineVisualizationUri = `/gdc/md/${demoProjectId}/obj/10180`;
export const scatterVisualizationIdentifier = "aadETzcxdMG4";
export const scatterVisualizationUri = `/gdc/md/${demoProjectId}/obj/10181`;
export const bubbleVisualizationIdentifier = "aaiETx3DdLW9";
export const bubbleVisualizationUri = `/gdc/md/${demoProjectId}/obj/10182`;
export const pieVisualizationIdentifier = "aapESfYdfbT3";
export const pieVisualizationUri = `/gdc/md/${demoProjectId}/obj/10183`;
export const donutVisualizationIdentifier = "aamESCiPfn8R";
export const donutVisualizationUri = `/gdc/md/${demoProjectId}/obj/10184`;
export const treemapVisualizationIdentifier = "aamETJ60fNus";
export const treemapVisualizationUri = `/gdc/md/${demoProjectId}/obj/10185`;
export const heatmapVisualizationIdentifier = "aaeEUveEd60C";
export const heatmapVisualizationUri = `/gdc/md/${demoProjectId}/obj/10186`;
export const columnsVisualizationIdentifier = "aabOspdLbbvs";
export const columnVisualizationIdentifier = "acFJltTsifSQ";
export const columnVisualizationUri = `/gdc/md/${demoProjectId}/obj/6862`;
export const comboVisualizationIdentifier = "aacEW0WNe2EZ";
export const comboVisualizationUri = `/gdc/md/${demoProjectId}/obj/10187`;
export const xirrVisualizationIdentifier = "aadE2RdvheBe";
export const xirrVisualizationUri = `/gdc/md/${demoProjectId}/obj/10203`;
export const dateDatasetIdentifier = "date.dataset.dt";
export const dateDataSetUri = `/gdc/md/${demoProjectId}/obj/2180`;
export const employeeNameIdentifier = "label.employee.employeename";
export const employeeNameDisplayFormUri = `/gdc/md/${demoProjectId}/obj/2201`;
export const franchiseFeesAdRoyaltyIdentifier = "aabHeqImaK0d";
export const franchiseFeesIdentifier = "aaEGaXAEgB7U";
export const franchiseFeesIdentifierOngoingRoyalty = "aaWGcgnsfxIg";
export const franchiseFeesInitialFranchiseFeeIdentifier = "aaDHcv6wevkl";
export const franchiseFeesTag = "franchise_fees";
export const franchiseFeesVisualizationIdentifier = "aahnVeLugyFj";
export const franchisedSalesIdentifier = "aclF4oDIe5hP";
export const locationCityAttributeIdentifier = "attr.restaurantlocation.locationcity";
export const locationCityAttributeUri = `/gdc/md/${demoProjectId}/obj/2208`;
export const locationCityDisplayFormIdentifier = "label.restaurantlocation.locationcity";
export const locationIdAttributeIdentifier = "attr.restaurantlocation.locationid";
export const locationNameAttributeUri = `/gdc/md/${demoProjectId}/obj/2204`;
export const locationNameDisplayFormIdentifier = "label.restaurantlocation.locationname";
export const locationResortIdentifier = "label.restaurantlocation.locationresort";
export const locationResortUri = `/gdc/md/${demoProjectId}/obj/2206`;
export const locationStateAttributeIdentifier = "attr.restaurantlocation.locationstate";
export const locationStateAttributeUri = `/gdc/md/${demoProjectId}/obj/2210`;
export const locationStateAttributeCaliforniaUri = `/gdc/md/${demoProjectId}/obj/2210/elements?id=6340116`;
export const locationStateDisplayFormIdentifier = "label.restaurantlocation.locationstate";
export const menuCategoryAttributeDFIdentifier = "label.menuitem.menucategory";
export const menuItemNameAttributeDFIdentifier = "label.menuitem.menuitemname";
export const yearDateDataSetAttributeIdentifier = "date.year";
export const monthDateDataSetAttributeIdentifier = "date.month";
export const monthOfYearDateIdentifier = "date.act81lMifn6q";
export const yearDateIdentifier = "date.aag81lMifn6q";
export const quarterDateIdentifier = "date.aam81lMifn6q";
export const monthDateIdentifier = "date.abm81lMifn6q";
export const monthDateIdentifierJanuary = `/gdc/md/${demoProjectId}/obj/2071/elements?id=1`;
export const numberOfChecksIdentifier = "aeOt50ngicOD";
export const tableVisualizationIdentifier = "aatFRvXBdilm";
export const tableVisualizationUri = `/gdc/md/${demoProjectId}/obj/8702`;
export const totalSalesIdentifier = "aa7ulGyKhIE5";
export const totalCostsIdentifier = "aaQHncjzfrtR";
export const totalSalesLocalIdentifier = "c11c27a0b0314a83bfe5b64ab9de7b89";
export const totalCostsLocalIdentifier = "aaQHncjzfrtR";
export const numberOfRestaurantsIdentifier = "aawAq8YqhM3o";
export const averageRestaurantDailyCostsIdentifier = "aaQJzQzoeKwZ";
