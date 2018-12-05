import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Accordion } from 'native-base';
import { View, Image, StyleSheet,} from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Orientation from 'react-native-orientation-locker';

export default class InspectionOfDevicePage extends Component {

    componentDidMount(){
        Orientation.lockToLandscape();
    }

    render(){
        return(
            <Container>
                <Header>
                    <Body>
                    <Title>Включение Спектрофотометра В-1200. Подключение к сети</Title>
                    </Body>
                </Header>
                <Content padder >
                    <View>
                        <View>
                            <View style={{flex:1, flexDirection: 'row'}}>
                                <View style={{
                                    width: "40%"
                                }}>
                                    <Text style={{
                                        fontSize:15,
                                        marginBottom: 10,
                                        fontWeight: 'bold',
                                    }}>
                                        Шаг 3.
                                    </Text>
                                    <Text style={{
                                        fontSize:15,
                                        marginBottom: 10
                                    }}>
                                        Убедитесь в том, что тумблер включения находится в положении «0».
                                    </Text>

                                </View>
                                <View style={{marginLeft: 20}}>
                                    <Image
                                        source={require('../../img/B1200/tyl1_1.png')}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </Content>
                <Footer>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('PowerConnectionStep2')}>
                            <Text>Назад</Text>
                        </Button>
                    </Left>
                    <Body><Button onPress={() => this.props.navigation.navigate('PowerConnectionStep4')}><Text>Шаг 4</Text></Button></Body>
                    <Right><Button onPress={() => this.props.navigation.goBack(null)}><Text>К списку презентаций</Text></Button></Right>
                </Footer>
            </Container>
        )
    }
}

var styles = StyleSheet.create({

    italicText: {
        marginTop: 10,
        marginBottom: 10,
        fontStyle: 'italic',
        color: '#ff6600',
    }


});