import { createSelector } from 'reselect'

const COLLECTION_ID_MAP = {
    bands: 1,
    trackers: 2,
    equipment: 3,
    sports: 4,
    apparel: 5
}

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionUrlParam => (
    createSelector(
        [selectShopCollections],
        collections => 
            collections.find(collection =>
                collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    )
)