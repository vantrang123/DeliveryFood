import React from 'react';
import {View, StyleSheet, FlatList, Text, TouchableHighlight} from 'react-native';

import ProductItem from './ProductItem';
import Metrics from '../config/metrics';

class HomeScreen extends React.Component {
	
	renderItem = ({item}) => {
		return <ProductItem 
			image={item.image} 
			title={item.title} 
			social_rank={item.social_rank} 
			key={item.key} 
			keyword={item.keyword}
			status={item.status}
			time={item.time} />
	}
	keyExtractor = (item) => item.key;

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={{flexDirection: 'column'}}>
						<Text style={{color:'#c4c3cb', fontSize: 14}}>Address</Text>
						<Text style={{fontSize: 24, fontWeight: 'bold'}}>Đà Nẵng</Text>
					</View>

					<View>
						<TouchableHighlight>
							<Text style={{color:'#91f29e', fontSize: 15, fontWeight: 'bold'}}>Filters</Text>
						</TouchableHighlight>
					</View>
				</View>

				<View style={{borderBottomColor: '#91f29e',
					borderBottomWidth: 1,marginBottom: 10}}>
				</View>

				<View>
					<Text style={{fontSize: 17, marginBottom: 10, fontWeight:'bold'}}>Restaurants near you</Text>

					<FlatList
						data={data}
						renderItem={this.renderItem}
						keyExtractor={this.keyExtractor}
					/>
				
				</View>
			</View>
		)
	}
	
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		marginHorizontal: 15,
		marginBottom: 20,
		height: '75%'
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
		marginBottom: 5,
		
	},
	item: {
		width: Metrics.screenWidth / 1.5,
		height: Metrics.screenHeight / 2.5,
		marginBottom: 5,
	},
	
});

const data = [
	{	key: '0',
		publisher: "Bánh Huế 54",
		title: "Bánh Huế 54 - K54/2 Ông Ích Khiêm",
		keyword: 'Bánh Nậm, Lọc, Bèo, Ít',
		status: 'Opening',
		time: '15-25 min',
		social_rank: 5,
		image: require('../images/BanhHue.jpg'),
	},
	{
		key: '1',
		publisher: "Bánh Huế 54",
		title: "Sơn Trà Retreat - 11 Lê Văn Lương",
		keyword: 'Detox, Salad, Cocktail',
		status: 'Opening',
		time: '10-25 min',
		social_rank: 5,
		image: require('../images/SonTraRetreat.jpg'),
	},
	{	key: '2',
		publisher: "Gà Ơi",
		title: "Gà Ơi - 54 Nguyễn Chí Thanh",
		keyword: 'Salad Da Gà, Gà, Pate Gà',
		status: 'Opening',
		time: '10-20 min',
		social_rank: 5,
		image: require('../images/GaOi.jpg'),
	},
	{	
		key: '3',
		publisher: "Nướng Nhật Bản Odawa",
		title: "Nướng Odawa - 56 Nguyễn Công Trứ",
		keyword: 'Nướng, Diềm Heo, Diềm Bò',
		status: 'Opening',
		time: '15-25 min',
		social_rank: 4.8,
		image: require('../images/NuongNhatBan.jpg'),
	},
	{
		key: '4',
		publisher: "7Days",
		title: "7Days - 286 Đống Đa",
		keyword: 'Trà Sữa, Nướng, Bánh nướng',
		status: 'Opening',
		time: '5-15 min',
		social_rank: 4.5,
		image: require('../images/7Days.jpg'),
	},
	{
		key: '5',
		publisher: "Tiệm ăn 777",
		title: "Tiệm ăn 777 - 37 Đống Đa",
		keyword: 'Hủ tiếu, Súp cua',
		status: 'Opening',
		time: '10-20 min',
		social_rank: 5,
		image: require('../images/TiemAn777.jpg'),
	},
	{
		key: '6',
		publisher: "Ốc Cô Ba",
		title: "Ốc Cô Ba - K383/28 Hải Phòng",
		keyword: 'Ốc, Cà Na, Sò, Hương, Nghêu ',
		status: 'Opening',
		time: '10-15 min',
		social_rank: 5,
		image: require('../images/OcCoBa.jpg'),
	},
	{	
		key: '7',
		publisher: "Bánh Huế 54",
		title: "Bánh Huế 54 - K54/2 Ông Ích Khiêm",
		keyword: 'Bánh Nậm, Lọc, Bèo, Ít',
		status: 'Opening',
		time: '15-25 min',
		social_rank: 5,
		image: require('../images/BanhHue.jpg'),
	},
	{
		key: '8',
		publisher: "Bánh Huế 54",
		title: "Bánh Huế 54 - K54/2 Ông Ích Khiêm",
		keyword: 'Bánh Nậm, Lọc, Bèo, Ít',
		status: 'Opening',
		time: '15-25 min',
		social_rank: 5,
		image: require('../images/BanhHue.jpg'),
	},
	{
		key: '9',
		publisher: "Bánh Huế 54",
		title: "Bánh Huế 54 - K54/2 Ông Ích Khiêm",
		keyword: 'Bánh Nậm, Lọc, Bèo, Ít',
		status: 'Opening',
		time: '15-25 min',
		social_rank: 5,
		image: require('../images/BanhHue.jpg'),
	},
	{	
		key: '10',
		publisher: "Bánh Huế 54",
		title: "Bánh Huế 54 - K54/2 Ông Ích Khiêm",
		keyword: 'Bánh Nậm, Lọc, Bèo, Ít',
		status: 'Opening',
		time: '15-25 min',
		social_rank: 5,
		image: require('../images/BanhHue.jpg'),
	},
	{	
		key: '11',
		publisher: "Bánh Huế 54",
		title: "Bánh Huế 54 - K54/2 Ông Ích Khiêm",
		keyword: 'Bánh Nậm, Lọc, Bèo, Ít',
		status: 'Opening',
		time: '15-25 min',
		social_rank: 5,
		image: require('../images/BanhHue.jpg'),
	},
];
export default HomeScreen;