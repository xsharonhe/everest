const SHOP_CONSTANTS = [
    {
      id: 1,
      title: 'Bands',
      routeName: 'bands',
      items: [
        {
          id: 1,
          name: 'Elastic Orange',
          imageURL: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80',
          price: 15
        },
        {
            id: 2,
            name: 'Elastic Blue',
            imageURL: 'https://images.pexels.com/photos/2417486/pexels-photo-2417486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            price: 15
          },
        {
          id: 3,
          name: 'PullUp Set',
          imageURL: 'https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          price: 40
        },
        {
          id: 4,
          name: 'Orange Loop',
          imageURL: 'https://images.pexels.com/photos/4148956/pexels-photo-4148956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          price: 18
        },
        {
          id: 5,
          name: 'Yellow Rope & Foam Mat',
          imageURL: 'https://images.unsplash.com/photo-1515775538093-d2d95c5ee4f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 25
        },
        {
          id: 6,
          name: 'Red Super Stretch',
          imageURL: 'https://images.unsplash.com/photo-1560880078-85d166a0c3cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          price: 18
        },
        {
          id: 7,
          name: 'Purple Stretch',
          imageURL: 'https://images.unsplash.com/photo-1518609571773-39b7d303a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 14
        },
        {
          id: 8,
          name: 'Yellow & Black Long',
          imageURL: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 25
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageURL: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Trackers',
      routeName: 'trackers',
      items: [
        {
          id: 1,
          name: 'Heart+ PRO',
          imageURL: 'https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80',
          price: 220
        },
        {
          id: 2,
          name: 'Heart+ Smart',
          imageURL: 'https://images.pexels.com/photos/9051/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          price: 280
        },
        {
          id: 3,
          name: 'Heart+ Classic',
          imageURL: 'https://images.unsplash.com/photo-1486746290722-483e8f1e44d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1501&q=80',
          price: 110
        },
        {
          id: 4,
          name: 'Heart+ Galaxy',
          imageURL: 'https://images.unsplash.com/photo-1554116154-e733de92fe4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          price: 160
        },
        {
          id: 5,
          name: 'Heart Black',
          imageURL: 'https://images.pexels.com/photos/437038/pexels-photo-437038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          price: 290
        },
        {
          id: 6,
          name: 'Heart Geo',
          imageURL: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          price: 350
        },
        {
          id: 7,
          name: 'Heart OldSchool',
          imageURL: 'https://images.unsplash.com/photo-1494858723852-d3cc2477e12c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1956&q=80',
          price: 190
        },
        {
          id: 8,
          name: 'Heart+ Premium',
          imageURL: 'https://images.unsplash.com/photo-1486649961855-75838619c131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 500
        }
      ]
    },
    {
      id: 3,
      title: 'Equipment',
      routeName: 'equipment',
      items: [
        {
          id: 1,
          name: 'Black Dumbell Set',
          imageURL: 'https://images.unsplash.com/photo-1583248839364-bd7430a3cd83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
          price: 250
        },
        {
          id: 2,
          name: 'Pastel Dumbell Set',
          imageURL: 'https://images.unsplash.com/photo-1558017487-06bf9f82613a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1005&q=80',
          price: 90
        },
        {
          id: 3,
          name: 'OldSchool Dumbell Set',
          imageURL: 'https://images.unsplash.com/photo-1493690283958-32df2c86326e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1948&q=80',
          price: 110
        },
        {
          id: 4,
          name: 'Coloured 25LB Weights',
          imageURL: 'https://images.unsplash.com/photo-1589955898954-9c8d4bb86823?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          price: 210
        },
        {
          id: 5,
          name: 'Green and Black Barbell',
          imageURL: 'https://images.unsplash.com/photo-1586205208101-b9da5ef6120d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
          price: 250
        }
      ]
    },
    {
      id: 4,
      title: 'Sports',
      routeName: 'sports',
      items: [
        {
          id: 1,
          name: 'Tennis Ball Set',
          imageURL: 'https://images.unsplash.com/photo-1574379989050-bfd9e1a8a543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          price: 25
        },
        {
          id: 2,
          name: 'Basketball',
          imageURL: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
          price: 30
        },
        {
          id: 3,
          name: 'Engineered Racket',
          imageURL: 'https://images.unsplash.com/photo-1574271006921-4280fbc84573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          price: 80
        },
        {
          id: 4,
          name: 'Volleyball',
          imageURL: 'https://images.unsplash.com/photo-1588492069485-d05b56b2831d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
          price: 35
        },
        {
          id: 5,
          name: 'Football',
          imageURL: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80',
          price: 35
        },
        {
          id: 6,
          name: 'Soccer & Cleats Combo',
          imageURL: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          price: 135
        },
        {
          id: 7,
          name: 'Racket & Birdie Set',
          imageURL: 'https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?cs=srgb&dl=green-and-white-court-with-badminton-rackets-3660204.jpg&fm=jpg',
          price: 150
        }
      ]
    },
    {
      id: 5,
      title: 'Apparel',
      routeName: 'apparel',
      items: [
        {
          id: 1,
          name: 'Mens Track',
          imageURL: 'https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          price: 90
        },
        {
          id: 2,
          name: 'Womens Track',
          imageURL: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          price: 90
        },
        {
          id: 3,
          name: 'Yoga Combo',
          imageURL: 'https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          price: 55
        },
        {
          id: 4,
          name: 'Yoga Combo 2',
          imageURL: 'https://images.pexels.com/photos/4056529/pexels-photo-4056529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          price: 55
        },
        {
          id: 5,
          name: 'Mens Tanktop Combo',
          imageURL: 'https://images.unsplash.com/photo-1583500178964-98351600826a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          price: 55
        },
        {
          id: 6,
          name: 'Womens Weights',
          imageURL: 'https://images.unsplash.com/photo-1566241142404-6c2bb4201a30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 25
        }
      ]
    }
  ]

export default SHOP_CONSTANTS;