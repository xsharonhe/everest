import React from 'react';
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

import Button from '../button/button.component'
import './collection-item.styles.scss'

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageURL } = item;
    
    return(
    <div className='collection-item'>
        <div 
        className='image' 
        style={{
            backgroundImage: `url(${imageURL})`
        }}
        >
        </div>
        <div className='collection-footer'>
            <span className='name'> { name } </span>
            <span className='price'> { price } </span>
        </div>
        <Button onClick={() => addItem(item)} inverted> Add to cart </Button>
    </div>)
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps) (CollectionItem);