import React from 'react';

import CollectionItem from '../collection-item/collection-item.component'
import './preview-collection.styles.scss'

const PreviewCollection = ({ title, items, history, sections }) => (
    <div className='preview-collection'>
        <h1>{ title.toUpperCase() }</h1>
        <div className='preview'>
            {
                items
                    .filter((item, index) => (index < 4))
                    .map((item) => 
                    (<CollectionItem key={ item.id } item={ item } />
                ))}
        </div>
    </div>
)

export default PreviewCollection;