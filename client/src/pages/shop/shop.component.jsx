import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';

import Button from '../../components/button/button.component'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionsContainer from '../collection/collection.container'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import './shop.styles.scss'

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, history, sections } = this.props;
    return (
      <div className='shop-page'>
        <div className='collections-button'>
            {
                sections.map(({linkURL, title}) => (
                    <Button onClick={() => {
                        history.push(linkURL)
                    }}> SHOP ALL { title } </Button>
                    ))
            }
        </div>
        <Route exact path={`${match.path}`} component={ CollectionsOverviewContainer }/>
        <Route path={`${match.path}/:collectionId`} component={ CollectionsContainer }/>
      </div>
      );
    }
}
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopPage));
