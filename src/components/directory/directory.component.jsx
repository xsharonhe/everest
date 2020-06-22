import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'bands',
                  imageURL: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80',
                  id: 1,
                  linkURL: 'shop/bands'
                },
                {
                  title: 'trackers',
                  imageURL: 'https://images.pexels.com/photos/9051/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                  id: 2,
                  linkURL: 'shop/trackers'
                },
                {
                  title: 'equipment',
                  imageURL: 'https://images.unsplash.com/photo-1493690283958-32df2c86326e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1948&q=80',
                  id: 3,
                  linkURL: 'shop/equipment'
                },
                {
                  title: 'sports',
                  imageURL: 'https://images.unsplash.com/photo-1574379989050-bfd9e1a8a543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
                  size: 'large',
                  id: 4,
                  linkURL: 'shop/sports'
                },
                {
                  title: 'apparel',
                  imageURL: 'https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                  size: 'large',
                  id: 5,
                  linkURL: 'shop/apparel'
                }
              ],
              
        };
    }

    render() {
      return (
        <div className='menu-directory'>
          {
            this.state.sections.map(({id, ...sectionProps}) => (
            <MenuItem key={ id } {...sectionProps} />
            )) 
          }
        </div>
        )
    }
}

export default Directory;