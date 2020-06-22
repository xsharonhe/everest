import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss';

import bandsPhoto from './bands.jpg'

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'bands',
                  image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80',
                  id: 1,
                  linkURL: 'shop/bands'
                },
                {
                  title: 'smartwatches',
                  imageURL: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkURL: 'shop/smartwatches'
                },
                {
                  title: 'equipment',
                  imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkURL: 'shop/equipment'
                },
                {
                  title: 'accessories',
                  imageURL: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkURL: 'shop/accessories'
                },
                {
                  title: 'apparel',
                  imageURL: 'https://i.ibb.co/R70vBrQ/men.png',
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
            this.state.sections.map(({ title, imageURL, id}) => (
            <MenuItem key={ id } title = { title }/>
            )) 
          }
        </div>
        )
    }
}

export default Directory;