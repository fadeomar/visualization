import React from "react";
import Tree from "react-d3-tree";

const debugData = [
  {
    name: "Accounts",
    children: [
      {
        name: "Dev - SOC Log Aggregator zzc",
        children: [
          {
            name: "FullAWSAccess",
          },
        ],
      },
      {
        name: "IL-NX-Default-Dev zzf",
        children: [
          {
            name: "FullAWSAccess",
          },
        ],
      },
      {
        name: "The Knights of Ni zzd",
        children: [
          {
            name: "FullAWSAccess",
          },
        ],
      },
      {
        name: "Dev - Cloud Testing zzj",
        children: [
          {
            name: "FullAWSAccess",
          },
        ],
      },
      {
        name: "Dev - Turbot zza",
        children: [
          {
            name: "FullAWSAccess",
          },
        ],
      },
      {
        name: "Dev - Cloud Management zzb",
        children: [
          {
            name: "FullAWSAccess",
          },
          {
            name: "RestrictAMItoVPC_1",
          },
        ],
      },
      {
        name: "Prod - AWS Organizations (Secondary) zze",
        children: [
          {
            name: "FullAWSAccess",
          },
        ],
      },
      {
        name: "Dev - testing app zzh",
        children: [
          {
            name: "FullAWSAccess",
          },
        ],
      },
      {
        name: "Dev - Cloud Security Monitoring zzk",
        children: [
          {
            name: "FullAWSAccess",
          },
        ],
      },
      {
        name: "EC-Default Dev Collab zzg",
        children: [
          {
            name: "FullAWSAccess",
          },
        ],
      },
    ],
  },
];

const containerStyles = {
  width: "100%",
  height: "100vh",
};

export default class CenteredTree extends React.PureComponent {
  state = {};

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 2,
      },
    });
  }

  render() {
    return (
      <div style={containerStyles} ref={(tc) => (this.treeContainer = tc)}>
        <Tree
          data={debugData}
          translate={this.state.translate}
          orientation={"vertical"}
          // initialDepth={0}
          // collapsible={true}
        />
      </div>
    );
  }
}

// const treeProps = {
//   data: myTreeData,
//   orientation: "vertical",
//   translate: { x: 400, y: 300 }, // Initial center position
//   translateExtent: { x: [-500, 500], y: [-500, 500] }, // Panning range
//   scale: 1,
//   initialDepth: 0,
//   collapsible: true,
//   onClickNode: handleNodeClick, // Call the click event handler

//   // Add animations using CSS transitions
//   renderCustomNodeElement: ({ nodeDatum, toggleNode }) => (
//     <g onClick={toggleNode}>
//       <circle
//         r={10}
//         className={`node-circle ${
//           openNodes.includes(nodeDatum.id) ? "open" : "closed"
//         }`}
//       />
//       <text>{nodeDatum.name}</text>
//     </g>
//   ),
// };
