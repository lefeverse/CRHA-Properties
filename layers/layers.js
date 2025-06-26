var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HarrisSt_1 = new ol.format.GeoJSON();
var features_HarrisSt_1 = format_HarrisSt_1.readFeatures(json_HarrisSt_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HarrisSt_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HarrisSt_1.addFeatures(features_HarrisSt_1);
var lyr_HarrisSt_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HarrisSt_1, 
                style: style_HarrisSt_1,
                popuplayertitle: 'Harris St',
                interactive: true,
                title: '<img src="styles/legend/HarrisSt_1.png" /> Harris St'
            });
var format_Michie_2 = new ol.format.GeoJSON();
var features_Michie_2 = format_Michie_2.readFeatures(json_Michie_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Michie_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Michie_2.addFeatures(features_Michie_2);
var lyr_Michie_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Michie_2, 
                style: style_Michie_2,
                popuplayertitle: 'Michie',
                interactive: true,
                title: '<img src="styles/legend/Michie_2.png" /> Michie'
            });
var format_Ridge_3 = new ol.format.GeoJSON();
var features_Ridge_3 = format_Ridge_3.readFeatures(json_Ridge_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ridge_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ridge_3.addFeatures(features_Ridge_3);
var lyr_Ridge_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ridge_3, 
                style: style_Ridge_3,
                popuplayertitle: 'Ridge',
                interactive: true,
                title: '<img src="styles/legend/Ridge_3.png" /> Ridge'
            });
var format_Dice_4 = new ol.format.GeoJSON();
var features_Dice_4 = format_Dice_4.readFeatures(json_Dice_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dice_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dice_4.addFeatures(features_Dice_4);
var lyr_Dice_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dice_4, 
                style: style_Dice_4,
                popuplayertitle: 'Dice',
                interactive: true,
                title: '<img src="styles/legend/Dice_4.png" /> Dice'
            });
var format_105_5 = new ol.format.GeoJSON();
var features_105_5 = format_105_5.readFeatures(json_105_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_105_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_105_5.addFeatures(features_105_5);
var lyr_105_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_105_5, 
                style: style_105_5,
                popuplayertitle: '10.5',
                interactive: true,
                title: '<img src="styles/legend/105_5.png" /> 10.5'
            });
var format_12thStreet_6 = new ol.format.GeoJSON();
var features_12thStreet_6 = format_12thStreet_6.readFeatures(json_12thStreet_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12thStreet_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12thStreet_6.addFeatures(features_12thStreet_6);
var lyr_12thStreet_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_12thStreet_6, 
                style: style_12thStreet_6,
                popuplayertitle: '12th Street',
                interactive: true,
                title: '<img src="styles/legend/12thStreet_6.png" /> 12th Street'
            });
var format_10th_7 = new ol.format.GeoJSON();
var features_10th_7 = format_10th_7.readFeatures(json_10th_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10th_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10th_7.addFeatures(features_10th_7);
var lyr_10th_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10th_7, 
                style: style_10th_7,
                popuplayertitle: '10th',
                interactive: true,
                title: '<img src="styles/legend/10th_7.png" /> 10th'
            });
var format_11thStreet_8 = new ol.format.GeoJSON();
var features_11thStreet_8 = format_11thStreet_8.readFeatures(json_11thStreet_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11thStreet_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11thStreet_8.addFeatures(features_11thStreet_8);
var lyr_11thStreet_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_11thStreet_8, 
                style: style_11thStreet_8,
                popuplayertitle: '11th Street',
                interactive: true,
                title: '<img src="styles/legend/11thStreet_8.png" /> 11th Street'
            });
var format_4thSt_9 = new ol.format.GeoJSON();
var features_4thSt_9 = format_4thSt_9.readFeatures(json_4thSt_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4thSt_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4thSt_9.addFeatures(features_4thSt_9);
var lyr_4thSt_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4thSt_9, 
                style: style_4thSt_9,
                popuplayertitle: '4th St',
                interactive: true,
                title: '<img src="styles/legend/4thSt_9.png" /> 4th St'
            });
var format_Booker_10 = new ol.format.GeoJSON();
var features_Booker_10 = format_Booker_10.readFeatures(json_Booker_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Booker_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Booker_10.addFeatures(features_Booker_10);
var lyr_Booker_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Booker_10, 
                style: style_Booker_10,
                popuplayertitle: 'Booker',
                interactive: true,
                title: '<img src="styles/legend/Booker_10.png" /> Booker'
            });
var format_NalleSt_11 = new ol.format.GeoJSON();
var features_NalleSt_11 = format_NalleSt_11.readFeatures(json_NalleSt_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NalleSt_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NalleSt_11.addFeatures(features_NalleSt_11);
var lyr_NalleSt_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NalleSt_11, 
                style: style_NalleSt_11,
                popuplayertitle: 'Nalle St',
                interactive: true,
                title: '<img src="styles/legend/NalleSt_11.png" /> Nalle St'
            });
var format_75_12 = new ol.format.GeoJSON();
var features_75_12 = format_75_12.readFeatures(json_75_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_12.addFeatures(features_75_12);
var lyr_75_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_12, 
                style: style_75_12,
                popuplayertitle: '7.5',
                interactive: true,
                title: '<img src="styles/legend/75_12.png" /> 7.5'
            });
var format_Gordon_13 = new ol.format.GeoJSON();
var features_Gordon_13 = format_Gordon_13.readFeatures(json_Gordon_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gordon_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gordon_13.addFeatures(features_Gordon_13);
var lyr_Gordon_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gordon_13, 
                style: style_Gordon_13,
                popuplayertitle: 'Gordon',
                interactive: true,
                title: '<img src="styles/legend/Gordon_13.png" /> Gordon'
            });
var format_West_14 = new ol.format.GeoJSON();
var features_West_14 = format_West_14.readFeatures(json_West_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_West_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_West_14.addFeatures(features_West_14);
var lyr_West_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_West_14, 
                style: style_West_14,
                popuplayertitle: 'West',
                interactive: true,
                title: '<img src="styles/legend/West_14.png" /> West'
            });
var format_Montrose_15 = new ol.format.GeoJSON();
var features_Montrose_15 = format_Montrose_15.readFeatures(json_Montrose_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Montrose_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Montrose_15.addFeatures(features_Montrose_15);
var lyr_Montrose_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Montrose_15, 
                style: style_Montrose_15,
                popuplayertitle: 'Montrose',
                interactive: true,
                title: '<img src="styles/legend/Montrose_15.png" /> Montrose'
            });
var format_EMain_16 = new ol.format.GeoJSON();
var features_EMain_16 = format_EMain_16.readFeatures(json_EMain_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EMain_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EMain_16.addFeatures(features_EMain_16);
var lyr_EMain_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EMain_16, 
                style: style_EMain_16,
                popuplayertitle: 'EMain',
                interactive: true,
                title: '<img src="styles/legend/EMain_16.png" /> EMain'
            });
var format_Avon_17 = new ol.format.GeoJSON();
var features_Avon_17 = format_Avon_17.readFeatures(json_Avon_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Avon_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Avon_17.addFeatures(features_Avon_17);
var lyr_Avon_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Avon_17, 
                style: style_Avon_17,
                popuplayertitle: 'Avon',
                interactive: true,
                title: '<img src="styles/legend/Avon_17.png" /> Avon'
            });
var format_CH_18 = new ol.format.GeoJSON();
var features_CH_18 = format_CH_18.readFeatures(json_CH_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CH_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CH_18.addFeatures(features_CH_18);
var lyr_CH_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CH_18, 
                style: style_CH_18,
                popuplayertitle: 'CH',
                interactive: true,
                title: '<img src="styles/legend/CH_18.png" /> CH'
            });
var format_Meridian_19 = new ol.format.GeoJSON();
var features_Meridian_19 = format_Meridian_19.readFeatures(json_Meridian_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Meridian_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Meridian_19.addFeatures(features_Meridian_19);
var lyr_Meridian_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Meridian_19, 
                style: style_Meridian_19,
                popuplayertitle: 'Meridian',
                interactive: true,
                title: '<img src="styles/legend/Meridian_19.png" /> Meridian'
            });
var format_5thStreet_20 = new ol.format.GeoJSON();
var features_5thStreet_20 = format_5thStreet_20.readFeatures(json_5thStreet_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5thStreet_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5thStreet_20.addFeatures(features_5thStreet_20);
var lyr_5thStreet_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5thStreet_20, 
                style: style_5thStreet_20,
                popuplayertitle: '5th Street',
                interactive: true,
                title: '<img src="styles/legend/5thStreet_20.png" /> 5th Street'
            });
var format_1016Coleman_21 = new ol.format.GeoJSON();
var features_1016Coleman_21 = format_1016Coleman_21.readFeatures(json_1016Coleman_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1016Coleman_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1016Coleman_21.addFeatures(features_1016Coleman_21);
var lyr_1016Coleman_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1016Coleman_21, 
                style: style_1016Coleman_21,
                popuplayertitle: '1016 Coleman',
                interactive: true,
                title: '<img src="styles/legend/1016Coleman_21.png" /> 1016 Coleman'
            });
var format_1020Coleman_22 = new ol.format.GeoJSON();
var features_1020Coleman_22 = format_1020Coleman_22.readFeatures(json_1020Coleman_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1020Coleman_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1020Coleman_22.addFeatures(features_1020Coleman_22);
var lyr_1020Coleman_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1020Coleman_22, 
                style: style_1020Coleman_22,
                popuplayertitle: '1020 Coleman',
                interactive: true,
                title: '<img src="styles/legend/1020Coleman_22.png" /> 1020 Coleman'
            });
var format_Page_23 = new ol.format.GeoJSON();
var features_Page_23 = format_Page_23.readFeatures(json_Page_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Page_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Page_23.addFeatures(features_Page_23);
var lyr_Page_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Page_23, 
                style: style_Page_23,
                popuplayertitle: 'Page ',
                interactive: true,
                title: '<img src="styles/legend/Page_23.png" /> Page '
            });
var format_Monticello_24 = new ol.format.GeoJSON();
var features_Monticello_24 = format_Monticello_24.readFeatures(json_Monticello_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monticello_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monticello_24.addFeatures(features_Monticello_24);
var lyr_Monticello_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monticello_24, 
                style: style_Monticello_24,
                popuplayertitle: 'Monticello ',
                interactive: true,
                title: '<img src="styles/legend/Monticello_24.png" /> Monticello '
            });
var format_Hinton_25 = new ol.format.GeoJSON();
var features_Hinton_25 = format_Hinton_25.readFeatures(json_Hinton_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hinton_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hinton_25.addFeatures(features_Hinton_25);
var lyr_Hinton_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hinton_25, 
                style: style_Hinton_25,
                popuplayertitle: 'Hinton',
                interactive: true,
                title: '<img src="styles/legend/Hinton_25.png" /> Hinton'
            });
var format_712Elsom_26 = new ol.format.GeoJSON();
var features_712Elsom_26 = format_712Elsom_26.readFeatures(json_712Elsom_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_712Elsom_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_712Elsom_26.addFeatures(features_712Elsom_26);
var lyr_712Elsom_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_712Elsom_26, 
                style: style_712Elsom_26,
                popuplayertitle: '712 Elsom',
                interactive: true,
                title: '<img src="styles/legend/712Elsom_26.png" /> 712 Elsom'
            });
var format_HardyDrive_27 = new ol.format.GeoJSON();
var features_HardyDrive_27 = format_HardyDrive_27.readFeatures(json_HardyDrive_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HardyDrive_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HardyDrive_27.addFeatures(features_HardyDrive_27);
var lyr_HardyDrive_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HardyDrive_27, 
                style: style_HardyDrive_27,
                popuplayertitle: 'Hardy Drive',
                interactive: true,
                title: '<img src="styles/legend/HardyDrive_27.png" /> Hardy Drive'
            });
var format_LatLonLocations_28 = new ol.format.GeoJSON();
var features_LatLonLocations_28 = format_LatLonLocations_28.readFeatures(json_LatLonLocations_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LatLonLocations_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LatLonLocations_28.addFeatures(features_LatLonLocations_28);
var lyr_LatLonLocations_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LatLonLocations_28, 
                style: style_LatLonLocations_28,
                popuplayertitle: 'Lat Lon Locations',
                interactive: true,
                title: '<img src="styles/legend/LatLonLocations_28.png" /> Lat Lon Locations'
            });
var format_Riverside_29 = new ol.format.GeoJSON();
var features_Riverside_29 = format_Riverside_29.readFeatures(json_Riverside_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Riverside_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Riverside_29.addFeatures(features_Riverside_29);
var lyr_Riverside_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Riverside_29, 
                style: style_Riverside_29,
                popuplayertitle: 'Riverside',
                interactive: true,
                title: '<img src="styles/legend/Riverside_29.png" /> Riverside'
            });
var format_MadisonAve_30 = new ol.format.GeoJSON();
var features_MadisonAve_30 = format_MadisonAve_30.readFeatures(json_MadisonAve_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MadisonAve_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MadisonAve_30.addFeatures(features_MadisonAve_30);
var lyr_MadisonAve_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MadisonAve_30, 
                style: style_MadisonAve_30,
                popuplayertitle: 'Madison Ave',
                interactive: true,
                title: '<img src="styles/legend/MadisonAve_30.png" /> Madison Ave'
            });
var group_CRHASitesPoint = new ol.layer.Group({
                                layers: [lyr_HarrisSt_1,lyr_Michie_2,lyr_Ridge_3,lyr_Dice_4,lyr_105_5,lyr_12thStreet_6,lyr_10th_7,lyr_11thStreet_8,lyr_4thSt_9,lyr_Booker_10,lyr_NalleSt_11,lyr_75_12,lyr_Gordon_13,lyr_West_14,lyr_Montrose_15,lyr_EMain_16,lyr_Avon_17,lyr_CH_18,lyr_Meridian_19,lyr_5thStreet_20,lyr_1016Coleman_21,lyr_1020Coleman_22,lyr_Page_23,lyr_Monticello_24,lyr_Hinton_25,lyr_712Elsom_26,lyr_HardyDrive_27,lyr_LatLonLocations_28,lyr_Riverside_29,lyr_MadisonAve_30,],
                                fold: 'open',
                                title: 'CRHA Sites - Point'});

lyr_OpenStreetMap_0.setVisible(true);lyr_HarrisSt_1.setVisible(true);lyr_Michie_2.setVisible(true);lyr_Ridge_3.setVisible(true);lyr_Dice_4.setVisible(true);lyr_105_5.setVisible(true);lyr_12thStreet_6.setVisible(true);lyr_10th_7.setVisible(true);lyr_11thStreet_8.setVisible(true);lyr_4thSt_9.setVisible(true);lyr_Booker_10.setVisible(true);lyr_NalleSt_11.setVisible(true);lyr_75_12.setVisible(true);lyr_Gordon_13.setVisible(true);lyr_West_14.setVisible(true);lyr_Montrose_15.setVisible(true);lyr_EMain_16.setVisible(true);lyr_Avon_17.setVisible(true);lyr_CH_18.setVisible(true);lyr_Meridian_19.setVisible(true);lyr_5thStreet_20.setVisible(true);lyr_1016Coleman_21.setVisible(true);lyr_1020Coleman_22.setVisible(true);lyr_Page_23.setVisible(true);lyr_Monticello_24.setVisible(true);lyr_Hinton_25.setVisible(true);lyr_712Elsom_26.setVisible(true);lyr_HardyDrive_27.setVisible(true);lyr_LatLonLocations_28.setVisible(true);lyr_Riverside_29.setVisible(true);lyr_MadisonAve_30.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_CRHASitesPoint];
lyr_HarrisSt_1.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_Michie_2.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_Ridge_3.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_Dice_4.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_105_5.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_12thStreet_6.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_10th_7.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_11thStreet_8.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_4thSt_9.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_Booker_10.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_NalleSt_11.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_75_12.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_Gordon_13.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_West_14.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_Montrose_15.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_EMain_16.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_Avon_17.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_CH_18.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_Meridian_19.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_5thStreet_20.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_1016Coleman_21.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_1020Coleman_22.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_Page_23.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_Monticello_24.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_Hinton_25.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_712Elsom_26.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_HardyDrive_27.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_LatLonLocations_28.set('fieldAliases', {'fid': 'fid', 'latitude': 'latitude', 'longitude': 'longitude', 'label': 'label', });
lyr_Riverside_29.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_MadisonAve_30.set('fieldAliases', {'id': 'id', 'Addresas': 'Addresas', });
lyr_HarrisSt_1.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_Michie_2.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_Ridge_3.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_Dice_4.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_105_5.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_12thStreet_6.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_10th_7.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_11thStreet_8.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_4thSt_9.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_Booker_10.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_NalleSt_11.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_75_12.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_Gordon_13.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_West_14.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_Montrose_15.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_EMain_16.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_Avon_17.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_CH_18.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_Meridian_19.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_5thStreet_20.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_1016Coleman_21.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_1020Coleman_22.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_Page_23.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_Monticello_24.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_Hinton_25.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_712Elsom_26.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_HardyDrive_27.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_LatLonLocations_28.set('fieldImages', {'fid': '', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'label': 'TextEdit', });
lyr_Riverside_29.set('fieldImages', {'id': 'TextEdit', 'Address': 'TextEdit', });
lyr_MadisonAve_30.set('fieldImages', {'id': 'TextEdit', 'Addresas': 'TextEdit', });
lyr_HarrisSt_1.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_Michie_2.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_Ridge_3.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_Dice_4.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_105_5.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_12thStreet_6.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_10th_7.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_11thStreet_8.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_4thSt_9.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_Booker_10.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_NalleSt_11.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_75_12.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_Gordon_13.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_West_14.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_Montrose_15.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_EMain_16.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_Avon_17.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_CH_18.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_Meridian_19.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_5thStreet_20.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_1016Coleman_21.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_1020Coleman_22.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_Page_23.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_Monticello_24.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_Hinton_25.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_712Elsom_26.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_HardyDrive_27.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_LatLonLocations_28.set('fieldLabels', {'fid': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'label': 'no label', });
lyr_Riverside_29.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_MadisonAve_30.set('fieldLabels', {'id': 'no label', 'Addresas': 'no label', });
lyr_MadisonAve_30.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});