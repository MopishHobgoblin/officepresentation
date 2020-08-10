import React from 'react';

export const headlineFeatures = [
    {
        feature: "Upload your files or folders to the cloud and access them anywhere.",
        description: [""],
        steps: ["Sign into office.com and select OneDrive", "Right-click a file, and select a command."],
    },{
        feature: "Manage your files and folders",
        description: [],
        steps: [],
    },{
        feature: "Collaborate with colleagues",
        description: [],
        steps: [],
    },{
        feature: "Access your files, from anywhere. Even on mobile.",
        description: [],
        steps: [],
    },{
        feature: "Work on the go",
        description: [],
        steps: [],
    },
];

const OneDriveFeatureList = () => {
    return (
        <div className="container-lg">
            <h2 className="text-center h2">Key Features of OneDrive</h2>
            <br></br>
            <ul className="list-group">
                {headlineFeatures.map(item => {
                    return (
                            <li className="list-group-item">{item.feature}</li>
                    )
                })}
            </ul>
            <br></br>
        </div>
    )
}

export default OneDriveFeatureList


