import React from 'react';


const modal = (x, os) => {
    return (
        <div>
            <button type="button" className="btn btn-lg btn-secondary" data-toggle="modal" data-target={`#${os}`}>
 {os}
</button>


<div className="modal fade" id={os} data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">{os} Shortcuts</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
<div className="table-responsive">
<table className="table table-hover table-striped">
  <thead>
    <tr>
      <th scope="col">Keys to Press</th>
      <th scope="col">Command</th>
    </tr>
  </thead>
  <tbody>
        {x.map(item => {
            switch (os){
            case 'Windows':
            return ( item.windows ?
                    (<tr>
                        <th scope="row">{item.windows}</th>
                        <td>{item.resolution}</td>
                    </tr>): null )

            case 'MacOS':
               return ( item.mac ? 
                (<tr>
                            <th scope="row">{item.mac}</th>
                            <td>{item.resolution}</td>
                        </tr>) : null)

            case 'Linux':
             return (item.linux ? (<tr>
                            <th scope="row">{item.linux}</th>
                            <td>{item.resolution}</td>
                        </tr>) : null)
            default:
                return null
            }})}
  </tbody>
</table></div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

      </div>
    </div>
  </div></div>
  </div>

    )
}

export default modal
