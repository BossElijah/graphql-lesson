const SHOP_DATA = {
  hats: {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 16
      }
    ]
  },
  sneakers: {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 200
      }
    ]
  },
  jackets: {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 185
      }
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 20
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl:
          'https://images.unsplash.com/photo-1619490938509-b95fec9c6399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjEwNTQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
