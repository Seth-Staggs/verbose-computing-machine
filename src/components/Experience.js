import React from 'react'

function Experience() {
    return (
        <div id='experience' className='experience'>
            <div className='d-flex justify-content-center my-5'>
            <h1>experience</h1>
            </div>
            <div className='container experience-wrapper'>
                <div className='timeline-block timeline-block-left'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2020-2021</h3>
                        <p>I Attended and graduated from Southern Methodist University's full stack certificate program. </p>
                    </div>
                </div>
                <div className='timeline-block timeline-block-right'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2021-Present</h3>
                        <p>Currently doing free lance work.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
