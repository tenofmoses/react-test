import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "contacts": {
        "width": 300,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "contacts__list": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": "100%"
    },
    "contacts__item": {
        "display": "flex",
        "alignItems": "center",
        "fontFamily": "sans-serif",
        "width": "100%",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "borderBottom": "1px dotted grey"
    },
    "contacts__img": {
        "width": 60,
        "height": 60,
        "borderRadius": "50%",
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5
    },
    "contacts__info": {
        "marginLeft": 20
    },
    "contacts__name": {
        "fontSize": 20,
        "fontWeight": "bold"
    },
    "contacts__phone": {
        "fontSize": 18,
        "color": "grey"
    }
});