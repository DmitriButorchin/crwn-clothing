import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => Object.values(collections)
);

export const selectCollection = memoize((collectionId) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionId]
  )
);
