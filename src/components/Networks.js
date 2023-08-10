import React from 'react'

export function Networks(props) {
    const { data } = props;

    return (
        <>
            <div className='card energy'>
            <div className='inner'>
            <div className='icon'></div>
            <div className='title'>
                <div className='text'>Networks</div>
            </div>
            <div className='number'>{data.length}</div>
            <div className='measure'>Nos</div>
            </div>
        </div>
        </>
    )
}
