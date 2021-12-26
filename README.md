# Green Cover

_green-cover is a project that helps in analysing geo-mapped aerial data to estimate green cover and related factors._ <br/>

_A [backend api](https://github.com/VirajPatidar/green-cover-backend) has been built using **Django REST Framework** to achieve the same._

<br/>

**Link to the website:** [https://green-cover.netlify.app/](https://green-cover.netlify.app/) <br/>

**Link to backend repo:** [https://github.com/VirajPatidar/green-cover-backend](https://github.com/VirajPatidar/green-cover-backend)


### Tech Stack ###
* React
* MATERIAL-UI
* axios
* date-fns


### Features ###
* Analysis of geo mapped photographs and satellite imagery to estimate green cover over time across the globe.
* Rendering dynamic maps to analyse green cover and generate timelapses representing change in green cover.
* To understand how increasing rate of deforestation is directly related to bad air quality and provide concrete statistics for the same. 
* Time series chart/graph representing change in green cover over the years for the state of Maharashtra.
* Predicting type of landcover in the state of Maharashtra by performing supervised classification using existing datasets. 
* Analysis of air quality on basis of various parameters for the state of Maharashtra.
* A system to manage and sign-up volunteers to arrange green drives and awareness programs.


### Features along with datasets used: ###

| TASK / FEATURE | DATASET |
| :---         | :---         
| Estimating Green Cover using Vegetation Indexes (Global)   | [USGS Landsat 8 Level 2, Collection 2, Tier 1](https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC08_C02_T1_L2)    |
| Timelapse for Normalized Difference Vegetation Index (NDVI) (Global)     | [USGS Landsat 8 Level 2, Collection 2, Tier 1](https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC08_C02_T1_L2) <br /> [USGS Landsat 5 Level 2, Collection 2, Tier 1](https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LT05_C02_T1_L2) |
| Time series graphical analysis representing Vegetation Indexes (NDVI & EVI) of Maharashtra     | [MOD13Q1.006 MODIS Terra Vegetation Indices 16-Day Global 250m](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD13Q1)     |
| Landcover Analysis of Maharashtra     | [USGS Landsat 8 Level 2, Collection 2, Tier 1](https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC08_C02_T1_L2) <br /> [MCD12Q1.006 MODIS Land Cover Type Yearly Global 500m](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD12Q1)   |
| Analysing Air Quality of Maharashtra     | [Sentinel-5P NRTI AER AI: Near Real-Time UV Aerosol Index](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_NRTI_L3_AER_AI) <br /> [Sentinel-5P NRTI CO: Near Real-Time Carbon Monoxide](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_NRTI_L3_CO) <br /> [Sentinel-5P NRTI NO2: Near Real-Time Nitrogen Dioxide](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_NRTI_L3_NO2) <br /> [Sentinel-5P NRTI HCHO: Near Real-Time Formaldehyde](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_NRTI_L3_HCHO)   |


<br/>
<br/>
