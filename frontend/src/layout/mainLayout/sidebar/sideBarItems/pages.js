// assets
import { IconKey, IconLogin, IconEdit, IconRotate2, IconError404 } from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconLogin,
    IconEdit,
    IconRotate2,
    IconError404  
};


// ----------------------------------[ PAGES MENU ITEMS ]------------------------------- //

/**
 * Pages group and items
 */

const pages = {
    id: 'pages',
    title: 'Pages',
    caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'login',
                    title: 'Login',
                    type: 'item',
                    url: 'authentication/login',
                    icon: icons.IconLogin,
                    target: true
                },
                {
                    id: 'register',
                    title: 'Register',
                    type: 'item',
                    url: 'authentication/register',
                    icon: icons.IconEdit,
                    target: true
                },
                {
                    id: 'forgotpass',
                    title: 'Forgot Password',
                    type: 'item',
                    url: 'authentication/forgotpass',
                    icon: icons.IconRotate2,
                    target: true
                },
            ]
        },
        {
            id: 'error',
            title: 'Error',
            type: 'item',
            url: '/error',
            icon: icons.IconError404,
            breadcrumbs: false
        },
    ]
};

export default pages;
