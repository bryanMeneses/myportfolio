import React from 'react'

const Copyright = () => {
    const date = new Date();
    return (
        <div className="wow fadeIn bg-dark text-light p-2" style={{ height: '3em' }}>
            Copyright © {date.getFullYear()} Bryan Meneses
        </div>
    )
}
export default Copyright;
