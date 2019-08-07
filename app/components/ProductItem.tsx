import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import Metrics from '../config/metrics';
class ProductItem extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const {image, title, social_rank, status, keyword, time} = this.props;

		return (
			<View style={styles.container}>
				<TouchableOpacity>
					<Image style={styles.image_product} source={image}/>
					
					<View style={styles.info}>					
						<View style={{ flexDirection: 'row', alignItems: 'center',justifyContent: 'space-between' }}>
							<Text style={{ fontWeight:'bold' }}>{title}</Text>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<Text style={{ fontWeight:'bold' }}>{social_rank}</Text>
								<Icon name="star" color={'#91f29e'} size={14} />
							</View>
						</View>
						

						<Text style={{ color:'#c4c3cb', marginBottom:2 }}>{keyword}</Text>

						<View style={{flexDirection: 'row', alignItems: 'center'}}>
							<Text style={{ fontWeight:'bold', marginRight: 5}}>{time}</Text>
							<Icon name="circle" color={ '#c4c3cb' } size={4} />
							<Text style={{ color:'#91f29e',marginLeft: 5}}>{status}</Text>
						</View>					
					</View>
				</TouchableOpacity>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		marginBottom: 15,
	},
	image_product: {
		width: Metrics.screenWidth / 1.1,
		height: Metrics.screenHeight / 3.5,
		borderRadius: 10,
	},
	info: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
});
export default ProductItem;