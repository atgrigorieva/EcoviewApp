import React from 'react';
import {NativeModules,
    Platform, StyleSheet, Dimensions, View } from 'react-native';
var PSPDFKit = NativeModules.PSPDFKit;
import Pdf from 'react-native-pdf';
if (Platform.OS === 'ios') {
    PSPDFKit.setLicenseKey('INSERT_YOUR_LICENSE_KEY_HERE');
}
///const DOCUMENT = Platform.OS === 'ios' ? 'V-UV1100.pdf' : "file:///sdcard/V-UV1100.pdf";

export default class PDFExample extends React.Component {
    render() {
        //const source = {uri:'http://ecoview.ru/images/ecove/doc_pdf/V-UV1100.pdf',cache:true};
        ///const source = require("V-UV1100.pdf"); // ios only
        const source = {uri:'bundle-assets://pdf/B-1100/V-UV1100.pdf'};

        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,..."};

        return (
            <View style={styles.container}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
    }
});