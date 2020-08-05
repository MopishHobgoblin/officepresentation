import React from 'react';


const modal = (x, os) => {
    return (

        <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#${os}`}>
 {os}
</button>


<div className="modal fade" id={os} data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header text-center">
        <h5 className="modal-title text-center" id="staticBackdropLabel">{os} Shortcuts</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <table className="table table-hover">
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
            return (<tr>
                        <th scope="row">{item.windows}</th>
                        <td>{item.resolution}</td>
                    </tr>)

            case 'MacOS':
                return (<tr>
                            <th scope="row">{item.mac}</th>
                            <td>{item.resolution}</td>
                        </tr>)

            case 'Linux':
                return (<tr>
                            <th scope="row">{item.linux}</th>
                            <td>{item.resolution}</td>
                        </tr>)

            default:
                return null
            }})}
  </tbody>
</table>
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
