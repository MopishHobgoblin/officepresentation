import React from 'react';
import videoViewer from '../js/videoViewer';

const collapse = (inputFunction) => {
    return (
        <div className="accordion" id="accordionExample">
            {Object.keys(inputFunction).map(key => {
                return (
                    <div classNameName="card">
                    <div className="card-header" id={`heading${key}`}>
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-center lead" type="button" data-toggle="collapse" data-target={`#collapse${key}`} aria-expanded="true" aria-controls={`collapse${key}`}>
                          {inputFunction[key].title}
                        </button>
                      </h2>
                    </div>
                <div className="container">
                    <div id={`collapse${key}`} className="collapse" aria-labelledby={`heading${key}`} data-parent="#accordionExample">
                      <div className="card-body">

                        {inputFunction[key].paragraph.map(item => {
                            return (<p className="lead">{item}</p>)})}

                        <div className="d-flex justify-content-center">

                        {inputFunction[key].video ? videoViewer(inputFunction[key].video) : null}

                        </div></div>
                      </div>
                    </div>
                    </div>
                )
            })}
        </div>
        
    )
}

export default collapse
