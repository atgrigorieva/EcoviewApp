import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';

import Pdf from 'react-native-pdf';

export default class PDFExample extends React.Component {
    render() {
        //const source = {uri:'http://ecoview.ru/images/ecove/doc_pdf/Certificate_of_registration.pdf',cache:true};
        //const source = require('./Certificate_of_registration.pdf');  // ios only
        const source = {uri:'bundle-assets://pdf/YF-3200/Certificate_of_registration.pdf'};

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