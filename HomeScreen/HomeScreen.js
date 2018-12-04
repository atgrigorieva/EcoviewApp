/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Accordion } from 'native-base';
import { View, Image, StyleSheet, TouchableHighlight} from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Orientation from 'react-native-orientation-locker';
import ImageSlider from 'react-native-image-slider';
//import { Navigation } from 'react-native-navigation'

///import AboutSpectrScreen from "../AboutSpectrScreen/index.js";





export default class HomePage extends Component {
	componentDidMount(){
    Orientation.lockToPortrait();
  }
	
	render() {
		//const { navigate } = this.props.navigation.navigate;
		const { navigate } = this.props.navigation;

        const images = [
            'https://ecoview.ru/templates/ecove1/images/spectron/B-1100_201x170.png',
            'https://ecoview.ru/templates/ecove1/images/spectron/YF-1800_200.png',
            'https://ecoview.ru/templates/ecove1/images/spectron/YF-3000_200.png',
        ];
		
		return(

			
			<Container>

				
				<Content padder >

                    {/*<View style={{borderBottomWidth: 0.5,*/}
                        {/*borderBottomColor: 'black', height: '15%'}}>*/}
                    <View>
                        <Image
                            style={styles.image}
                            source={require('../logo/LOGO_360.png')} />
                    </View>
			
					
					<View style={styles.buttonMenu}>
											
						<Button block style={styles.button}
							onPress={() => this.props.navigation.navigate('О спректрофотометрах')} >
							<Text>О спректрофотометрах</Text>									
						</Button>
						<Button block style={styles.button}
							onPress={() => this.props.navigation.navigate('Отправить отзыв')} >
							<Text>Отправить отзыв</Text>					
						</Button>
						<Button block style={styles.button} onPress={() => this.props.navigation.navigate('Замечания и пожелания')} >
							<Text>Замечания и пожелания</Text>					
						</Button>
						<Button block style={styles.button}>
							<Text>Инструкции по эксплуатации</Text>					
						</Button>
                        <Button block style={styles.button} onPress={() => this.props.navigation.navigate('Нормативные документы')}>
                            <Text>Нормативные документы</Text>
                        </Button>
						<Button block style={styles.button} onPress={() => this.props.navigation.navigate('Расчет по коэффициентам')}>
							<Text>Рассчет по коэффициентам</Text>							
						</Button>
                        <Button block style={styles.button} onPress={() => this.props.navigation.navigate('Обучающие презентации')}>
                            <Text>Обучающие презентации</Text>
                        </Button>
					</View>

                    <View styel={{marginBottom:10, height: 180}}>
                        <ImageSlider
                            loopBothSides
                            autoPlayWithInterval={3000}
                            images={images}
                            customSlide={({ index, item, style, width }) => (
                                // It's important to put style here because it's got offset inside
                                <View key={index} style={[style, styles.customSlide]}>
                                    <Image source={{ uri: item }} style={styles.customImage} />
                                </View>
                            )}

                        />
                    </View>
					
				
					
				</Content>
			
				
			</Container>
    );
		
	}
	
}

var styles = StyleSheet.create({	
	
	
	logo: {
		justifyContent: 'center',
	    alignItems:'center',
		marginBottom: 20,
	},
	
	image: {
		marginLeft:'auto',
		marginRight:'auto',
        marginTop: '1%',
        marginBottom: '1%',

  },
  
    buttonMenu: {
	    // flex:5,
        flexDirection: 'column',
        alignItems: 'flex-start', //replace with flex-end or center
		marginBottom: 10,

        // marginTop:'20%'
		
	},
	
	button: {
        marginTop: 10,
		backgroundColor: '#2079BD',
		fontFamily: 'Arial',
		
	},


    customSlide: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',

    },
    customImage: {
        width: 201,
        height: 170,
    },


});

