import React from 'react';

const Header = (props)=> (
    <nav style={{background: "blue", color: "gold"}} className={"navbar navbar-default sticky-top"}>
        <div className={"conatiner"}>
            <div>Super World of Warcraft</div>
            <div>score:{props.score}</div>
        </div>
    </nav>
);

export default Header;