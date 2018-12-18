import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Accordion, Tab, Tabs, TabHeading, Segment } from 'native-base';
import { View, Image, StyleSheet, Modal, TextInput, TouchableOpacity, Linking } from 'react-native';

export default class Buy extends Component{
    constructor(props) {
        super(props);
        this.state = {

            UserName: '', UserCity: '', UserPhone: '', Comment: '',
            product: this.props.navigation.getParam("product"),
        };
    }
    onPress = () => {

        {
            Linking.openURL('mailto: flora992@mail.ru?subject=Запрос на коммерческое предложение Ecoview&body=Имя пользователя:' +
                this.state.UserName + "\n Ваш город: " + this.state.UserCity + "\n Телефон для связи: " + this.state.UserPhone +
                "\n Комментарий: " + this.state.Comment + "\n Продукт: " + this.state.product)

        }
    }

    render() {
        const state = this.state;

        return(
            <Container>
                <Header>

                    <Body>
                    <Title>Купить</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder >
                    <View >
                        <Text>{this.state.product} </Text>
                        <Text>Ваше имя: </Text>

                        <TextInput
                            style={styles.textAreaContainer}
                            maxLength = {40}
                            onChangeText={(value) => this.setState({UserName: value})}
                            value={this.state.UserName}/>
                        <Text>Ваш город: </Text>

                        <TextInput
                            style={styles.textAreaContainer}
                            maxLength = {40}
                            onChangeText={(value) => this.setState({UserCity: value})}
                            value={this.state.UserCity}/>

                        <Text>Телефон для связи: </Text>

                        <TextInput
                            style={styles.textAreaContainer}
                            maxLength = {40}
                            onChangeText={(value) => this.setState({UserPhone: value.replace(/[^(((\d)+(\.)\d)|((\d)+))]/g,'_').split("_")[0],
                            })}
                            value={this.state.UserPhone}/>

                        <Text>Комментарий: </Text>
                        <View style={styles.textAreaContainer}>
                            <TextInput
                                onChangeText={(value) => this.setState({Comment: value})}
                                value={this.state.Comment}
                                style={styles.textArea}
                                placeholderTextColor="grey"
                                numberOfLines={10}
                                multiline={true} />
                        </View>

                        <View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.onPress }>
                                <Text> Отправить </Text>
                            </TouchableOpacity>

                        </View>



                    </View>
                </Content>
                <Footer>

                    <Right>
                        <Button info onPress={() => {this.props.navigation.goBack(null)}}>
                            <Text>Отмена</Text>

                        </Button>
                    </Right>
                </Footer>
            </Container>

        )}
}

var styles = StyleSheet.create({


    textAreaContainer: {
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 10
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start"
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 5
    },

});