import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Icon} from 'native-base';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Modal, TouchableHighlight, Alert } from 'react-native';


export default class YF3000 extends Component {

    render() {


        return (

            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack(null)}>
                            <Icon name="arrow-back"/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Нормативные документы. УФ-3000</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <View style={styles.buttonMenu}>
                        <Button block light style={styles.button}
                                onPress={() => this.props.navigation.navigate('Pasport')}>
                            <Text>Паспорт УФ-3000</Text></Button>
                        <Button block light style={styles.button}
                                onPress={() => this.props.navigation.navigate('TypeApprovalCertificate')}>
                            <Text>Свидетельство об утверждении типа СИ</Text></Button>
                        <Button block light style={styles.button}
                                onPress={() => this.props.navigation.navigate('DeclarationConformity')}>
                            <Text>Декларация о соответствии</Text></Button>
                        <Button block light style={styles.button}
                                onPress={() => this.props.navigation.navigate('MethodVerification')}>
                            <Text>Методика поверки</Text></Button>
                        <Button block light style={styles.button}
                                onPress={() => this.props.navigation.navigate('DescriptionTypeSI')}>
                            <Text>Описание типа СИ</Text></Button>
                        <Button block light style={styles.button}
                                onPress={() => this.props.navigation.navigate('Catalog')}>
                            <Text>Каталог</Text></Button>
                        <Button block light style={styles.button}>
                            <Text>Руководство по эксплуатации</Text></Button>
                        <Button block light style={styles.button}
                                onPress={() => this.props.navigation.navigate('CertificateConformity')}>
                            <Text>Сертификат соответствия</Text></Button>
                    </View>
                </Content>
            </Container>

        )};


}

var styles = StyleSheet.create({
    buttonMenu: {
        flex: 5,
        flexDirection: 'column',
        alignItems: 'flex-start', //replace with flex-end or center
        marginBottom: 10

    },

    button: {
        marginTop: 10,


    },

})