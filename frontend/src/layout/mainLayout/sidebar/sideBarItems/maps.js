// assets
import { IconMap, IconMap2 } from '@tabler/icons';

// constant
const icons = {
    IconMap,
    IconMap2,
};


// ----------------------------------[ MAPS MENU ITEMS ]------------------------------- //

/**
 * Maps group and items
 */

const maps = {
    id: 'maps',
    title: 'Maps',
    type: 'group',
    children: [
        {
            id: 'MapOne',
            title: 'Map One',
            type: 'item',
            url: '/maps/mapone',
            icon: icons.IconMap,
            breadcrumbs: false
        },
        {
            id: 'MapTwo',
            title: 'Map Two',
            type: 'item',
            url: '/maps/maptwo',
            icon: icons.IconMap2,
            breadcrumbs: false
        },        
    ]
};

export default maps;
