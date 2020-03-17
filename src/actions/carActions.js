export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const BUY_ITEM = 'BUY_ITEM';

export const removeFeature = () => {
    return { type: REMOVE_FEATURE };
}

export const buyItem = (feature) => {
    return { type: BUY_ITEM, payload:feature};
}