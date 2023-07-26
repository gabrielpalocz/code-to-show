import React from 'react'
import sideBarItems from '../sideBarItems/index'
import SideBarLink from './sideBarLinks';
import SideBarCollapse from './sideBarCollapse';
import { useSelector } from 'react-redux';


// ----------------------------------[ SIDEBAR MENU BUTTONS ]------------------------------- //

/**
 * 
 * @returns the sidebar menu buttons  
 */

export const SideBarButtons = () => {
    const darkMod = useSelector(state => state.darkMode.darkModeState);
    return (
        <>
            {React.Children.toArray(
                sideBarItems.items.map((group, indexP) => <><h5 key={`h5--${indexP}`} className={`${darkMod ? 'text-bg-dark' : ''}`} >{group.title}</h5>
                    <div key={`divg--${indexP}`}>
                        {group.children?.map((item, indexH) => {
                            switch (item.type) {
                                case 'collapse':
                                    return <SideBarCollapse keyCol={indexH} collapse={item} key={`ItemCol--${indexH}`} />;
                                default:
                                    return <SideBarLink keyIt={`Item--${indexH}`} items={item} key={`ItemH--${indexH}`} />;
                            }
                        })}
                    </div>
                    <hr key={`hr--${indexP}`} className={`${darkMod ? 'text-bg-dark' : ''}`}/></>)
            )}
        </>
    )
}
