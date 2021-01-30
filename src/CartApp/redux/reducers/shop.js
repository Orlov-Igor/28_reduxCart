
const initialState = [
	{
		name: 'bike',
		id: 1,
		price: 126,
		image: 'https://topdealsontheweb.com/wp-content/uploads/2016/05/26-wheel-Roadmaster-Granite-Peak-Mens-Mountain-Bike-Black-0-1.jpg'
	},
	{
		name: 'ball',
		id: 2,
		price: 14,
		image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Basketball.jpeg'
	},
	{
		name: 'snowboard',
		id: 3,
		price: 230,
		image: 'https://stylus.ua/thumbs/390x390/c7/d4/90207.jpeg'
	},
	{
		name: 'barbell',
		id: 4,
		price: 55,
		image: 'https://cdn.webshopapp.com/shops/281654/files/289053669/olympic-tri-grip-barbell-set.jpg'
	},
	{
		name: 'boat',
		id: 5,
		price: 458,
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJKTLF0o_AYil4SGmJboH0730nfxBqPsA1w&usqp=CAU'
	},
	{
		name: 'motorcycle',
		id: 6,
		price: 1250,
		image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1586817825-20ex400g-242wt1drf3cg-a-19104142414.png?crop=1xw:1xh;center,top&resize=480:*'
	},
];

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
};

export default shopReducer;
