hardcoded_elems = [
  {group: "nodes",data: { id: "archimate",label: "ArchiMate",type: "model",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "archimate", id: "business",type: "layer",label: "Business layer",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "archimate", id: "application",type: "layer",label: "Application layer",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "archimate", id: "techno",type: "layer",label: "technology & physical layer",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "archimate", id: "strategy",type: "layer",label: "Strategy layer",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "archimate", id: "motivation",type: "layer",label: "Motivation layer",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "archimate", id: "imp",type: "layer",label: "Implementation & Migration layer",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "archimate",id: "other",type: "layer",label: "other",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "archimate",id: "relations",type:"relations",label: "Relations",securityLevel: "securityLevel3"}},
  
  {group: "nodes",data: {parent: "relations",id: "relations_G1",type:"grouping",label: ""}},
  {group: "nodes",data: {parent: "relations",id: "relations_G2",type:"grouping",label: ""}}, 

  {group: "nodes",data: {parent: "relations",id: "accessE",type:"access",label: ""}},
  {group: "nodes",data: {parent: "relations",id: "aggregationE",type:"aggregation",label: ""}},  
  {group: "nodes",data: {parent: "relations",id: "assignmentE",type:"assignment",label: ""}},   
  {group: "nodes",data: {parent: "relations",id: "associationE",type:"association",label: ""}}, 
  {group: "nodes",data: {parent: "relations",id: "compositionE",type:"composition",label: ""}},   
  {group: "nodes",data: {parent: "relations",id: "flowE",type:"flow",label: ""}}, 
  {group: "nodes",data: {parent: "relations",id: "influenceE",type:"influence",label: ""}},
  {group: "nodes",data: {parent: "relations",id: "realizationE",type:"realization",label: ""}}, 
  {group: "nodes",data: {parent: "relations",id: "servingE",type:"serving",label: ""}},
  {group: "nodes",data: {parent: "relations",id: "specializationE",type:"specialization",label: ""}},  
  {group: "nodes",data: {parent: "relations",id: "triggeringE",type:"triggering",label: ""}},   
  
  
  {group: "edges",data: {id: "relations_association",type:"assocation-relationship",label: "association",source:"relations_G1", target:'relations_G2'}},
  {group: "edges",data: {id: "relations_aggregation",type:"aggregation-relationship",label: "aggregation",source:"relations_G1", target:'relations_G2'}},
  {group: "edges",data: {id: "relations_assignment",type:"assignment-relationship",label: "assingment",source:"relations_G1", target:'relations_G2'}},
  {group: "edges",data: {id: "relations_composition",type:"composition-relationship",label: "composition",source:"relations_G1", target:'relations_G2'}},
  {group: "edges",data: {id: "relations_flow",type:"flow-relationship",label: "flow",source:"relations_G1", target:'relations_G2'}},
  {group: "edges",data: {id: "relations_specialisation",type:"specialisation-relationship",label: "specialistion",source:"relations_G1", target:'relations_G2'}},
  {group: "edges",data: {id: "relations_influence",type:"influence-relationship",label: "influence",source:"relations_G1", target:'relations_G2'}},
  {group: "edges",data: {id: "relations_access",type:"access-relationship",label: "access",source:"relations_G1", target:'relations_G2'}},
  {group: "edges",data: {id: "relations_realization",type:"realization-relationship",label: "realization",source:"relations_G1", target:'relations_G2'}},
  {group: "edges",data: {id: "relations_serving",type:"serving-relationship",label: "serving",source:"relations_G1", target:'relations_G2'}},
  {group: "edges",data: {id: "relations_triggering",type:"triggering-relationship",label: "triggering",source:"relations_G1", target:'relations_G2'}},
  
  {group: "nodes",data: {parent: "archimate",id: "meta",type:"metamodel", label: "Meta",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "archimate",id: "drawing",label: "Drawing",type:"drawing",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "11",id: "extensionBusinessActor_DMN", type:"extension",label: "Business Actor Extensions DMN",securityLevel: "securityLevel3"}},
   {group: "nodes",data: {parent: "63",id: "extensionWorkpackage_DMN", type:"extension",label: "Workpackage Extensions DMN",securityLevel: "securityLevel3"}},
  
  {group: "nodes",data: {parent: "application",id: "01",label: "application-collaboration",type: "application-collaboration",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "application",id: "02",label: "application-component",type: "application-component",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "application",id: "03",label: "application-event",type: "application-event",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "application",id: "04",label: "application-function",type: "application-function",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "application",id: "05",label: "application-interaction",type: "application-interaction",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "application",id: "06",label: "application-interface",type: "application-interface",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "application",id: "07",label: "application-process",type: "application-process",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "application",id: "08",label: "application-service",type: "application-service",securityLevel: "securityLevel3"}}, 
  {group: "nodes",data: {parent: "techno"     ,id: "09",label: "artifact",type: "artifact",securityLevel: "securityLevel3"}}, 
  {group: "nodes",data: {parent: "motivation" ,id: "10",label: "assessment",type: "assessment",securityLevel: "securityLevel3"}}, 
  {group: "nodes",data: {parent: "business"   ,id: "11",label: "business-actor",type: "business-actor",securityLevel: "securityLevel3"}}, 
  {group: "nodes",data: {parent: "business"   ,id: "12",label: "business-collaboration",type: "business-collaboration",securityLevel: "securityLevel3"}}, 
  {group: "nodes",data: {parent: "business"   ,id: "13",label: "business-event",type: "business-event",securityLevel: "securityLevel3"}}, 
  {group: "nodes",data: {parent: "business"   ,id: "14",label: "business-function",type: "business-function",securityLevel: "securityLevel3"}}, 
  {group: "nodes",data: {parent: "business"   ,id: "15",label: "business-interaction",type: "business-interaction",securityLevel: "securityLevel3"}}, 
  {group: "nodes",data: {parent: "business"   ,id: "16",label: "business-interface",type: "business-interface",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "business"   ,id: "17",label: "business-object",type: "business-object",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "business"   ,id: "18",label: "business-process",type: "business-process",securityLevel: "securityLevel3"}}, 
  {group: "nodes",data: {parent: "business"   ,id: "19",label: "business-role",type: "business-role",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "business"   ,id: "20",label: "business-service",type: "business-service",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "strategy"   ,id: "21",label: "capability",type: "capability",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "techno"     ,id: "22",label: "communication-network",type: "communication-network",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "motivation" ,id: "23",label: "constraint",type: "constraint",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "business"   ,id: "24",label: "contract",type: "contract",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "strategy"   ,id: "25",label: "course-of-action",type: "course-of-action",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "application",id: "26",label: "data-object",type: "data-object",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "imp"        ,id: "27",label: "deliverable",type: "deliverable",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "techno"     ,id: "28",label: "device",type: "device",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "techno"     ,id: "29",label: "distribution-network",type: "distribution-network",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "motivation" ,id: "30",label: "driver",type: "driver",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "techno"     ,id: "31",label: "equipment",type: "equipment",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "techno"     ,id: "32",label: "facility",type: "facility",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "motivation" ,id: "30",label: "driver",type: "driver",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "techno"     ,id: "32",label: "facility",type: "facility",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "imp"        ,id: "33",label: "gap",type: "gap",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "motivation" ,id: "34",label: "goal",type: "goal",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "drawing"    ,id: "35",label: "group",type: "group",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "drawing"    ,id: "75",label: "note",type: "note",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "other"      ,id: "36",label: "grouping",type: "grouping",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "imp"        ,id: "37",label: "implementation-event",type: "implementation-event",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "meta"       ,id: "38",label: "layer",type: "layer",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "other"      ,id: "39",label: "location",type: "location",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "techno"     ,id: "40",label: "material",type: "material",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "motivation" ,id: "41",label: "meaning",type: "meaning",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "techno"     ,id: "42",label: "node",type: "node",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "meta"       ,id: "43",label: "model",type: "model",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "motivation" ,id: "44",label: "outcome",type: "outcome",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "meta"       ,id: "45",label: "package",type: "package",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "techno"     ,id: "46",label: "path",type: "path",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "imp"        ,id: "47",label: "plateau",type: "plateau",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "motivation" ,id: "48",label: "principle",type: "principle",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "business"   ,id: "49",label: "product",type: "product",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "business"   ,id: "50",label: "representation",type: "representation",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "motivation" ,id: "51",label: "requirement",type: "requirement",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "strategy"   ,id: "52",label: "resource",type: "resource",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "motivation" ,id: "53",label: "stakeholder",type: "stakeholder",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "techno"     ,id: "54",label: "system-software",type: "system-software",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "techno"     ,id: "55",label: "technology-collaboration",type: "technology-collaboration",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "techno"     ,id: "56",label: "technology-event",type: "technology-event",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "techno"     ,id: "57",label: "technology-function",type: "technology-function",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "techno"     ,id: "58",label: "technology-interaction",type: "technology-interaction",securityLevel: "securityLevel3"}},

  {group: "nodes",data: {parent: "techno"     ,id: "60",label: "technology-process",type: "technology-process",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "techno"     ,id: "61",label: "technology-service",type: "technology-service",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "motivation" ,id: "62",label: "value",type: "value",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "imp"        ,id: "63",label: "workpackage",type: "workpackage",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "meta"       ,id: "64",label: "view",type: "view",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "meta"       ,id: "65",label: "viewpoint",type: "viewpoint",securityLevel: "securityLevel3"}},

  {group: "nodes",data: {parent: "extensionBusinessActor_DMN"  ,id: "66",label: "Network of enteprise",type: "enterprise-network",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "extensionBusinessActor_DMN"  ,id: "67",label: "Ecosystem Business",type: "business-ecosystem",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "extensionBusinessActor_DMN"  ,id: "68",label: "Enterprise",type: "enterprise",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "extensionBusinessActor_DMN"  ,id: "69",label: "Deparment",type: "department",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "extensionBusinessActor_DMN"  ,id: "70",label: "Service",type: "service",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "extensionWorkpackage_DMN"    ,id: "71",label: "Program",type: "program",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "extensionWorkpackage_DMN"    ,id: "72",label: "Project",type: "project",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "extensionBusinessActor_DMN"  ,id: "73",label: "Team",type: "team",securityLevel: "securityLevel3"}},
  {group: "nodes",data: {parent: "extensionBusinessActor_DMN"  ,id: "74",label: "Person",type: "person",securityLevel: "securityLevel3"}}
  

 ];

//  {group: "nodes",data: {parent: "relations",id: "assignment",label: "assignment",securityLevel: "securityLevel3"}},
//  {group: "nodes",data: {parent: "archi"      ,id: "31",label: "folder",type: "folder",securityLevel: "securityLevel3"}},
//  {group: "nodes",data: {parent: "techno"     ,id: "59",label: "technology-interface",type: "technology-interface",securityLevel: "securityLevel3"}},

// pas la bonne icone pour gap
function readTxtFile(file, cb) {
  const fileReader = new FileReader();
  fileReader.onload = () => {
    try {
      cb(fileReader.result);
    } catch (error) {
      console.error('Given file is not suitable.', error);
    }
  };
  fileReader.onerror = (error) => {
    console.error('File could not be read!', error);
    fileReader.abort();
  };
  fileReader.readAsText(file);
}

function activateAccordions() {
  const acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

function addParentNode(idSuffix, parent = undefined) {
  const id = 'c' + idSuffix;
  const parentNode = { data: { id: id } };
  cy.add(parentNode);
  cy.$('#' + id).move({ parent: parent });
  return id;
}


function main() {

  const edgeStyles = {
    "type1": { "color": "#CFA79D", "arrowShape": "triangle" },
    "type2": { "color": "#9DCFA7", "arrowShape": "triangle" },
    "type3": { "color": "#A79DCF", "arrowShape": "triangle" },
  };

  function setColor4CompoundEdge(e) {
    const collapsedEdges = e.data('collapsedEdges');
    if (doElemsMultiTypes(collapsedEdges)) {
      return '#b3b3b3';
    }
    return collapsedEdges[0].style('line-color')
  }

  function setTargetArrowShape(e) {
    const collapsedEdges = e.data('collapsedEdges');
    const shapes = {};
    for (let i = 0; i < collapsedEdges.length; i++) {
      shapes[collapsedEdges[0].style('target-arrow-shape')] = true;
    }
    delete shapes['none'];
    if (Object.keys(shapes).length < 1) {
      if (collapsedEdges.sources().length > 1) {
        return collapsedEdges[0].style('source-arrow-shape');
      }
      return 'none';
    }
    return Object.keys(shapes)[0];
  }

  function setSourceArrowShape(e) {
    const collapsedEdges = e.data('collapsedEdges');
    const shapes = {};
    for (let i = 0; i < collapsedEdges.length; i++) {
      shapes[collapsedEdges[0].style('source-arrow-shape')] = true;
    }
    delete shapes['none'];
    if (Object.keys(shapes).length < 1) {
      if (collapsedEdges.sources().length > 1) {
        return collapsedEdges[0].style('target-arrow-shape');
      }
      return 'none';
    }
    return Object.keys(shapes)[0];
  }

  function doElemsMultiTypes(elems) {
    const classDict = {};
    for (let i = 0; i < elems.length; i++) {
      classDict[elems[i].data('edgeType')] = true;
    }
    return Object.keys(classDict).length > 1;
  }

  var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),

    ready: function () {
      this.layout({
        name: 'fcose',
        randomize: true,
        fit: true,
        animate: false,
        nodeDimensionsIncludeLabels: "true",
        condense:true
      }).run();      
      var api = this.expandCollapse({        
        layoutBy: {
          name: "fcose",
          animate: true,
          randomize: false,
          fit: true,
          nodeDimensionsIncludeLabels: "true",
          condense:true
        },
        fisheye: true,
        animate: true,
        undoable: false
      });
      api.collapseAll();
    },
    style: [
	{
        selector: "node.cy-expand-collapse-collapsed-node",
        style: {
          "background-color": "red",
          shape: "rectangle",
          "line-color": "red"
        }
      },

      {
        selector: 'node',
        style: {
 'background-color': 'white',
 //"background-image":"https://cdn.onlinewebfonts.com/svg/download_506799.png",
 //"background-image":"data:image/svg+xml;base64," + btoa(business_actor_html5.outerHTML),
// "background-image":technology_collaboration_svg(),
// "background-image":ArchiMate("technology-collaboration"),
          label:"data(label)",
        "background-image":(ele) => renderNode(ele).img,
          width: (ele) => renderNode(ele).width,
          height: (ele) => renderNode(ele).height,
          "background-opacity":1,
          "border-width":0,
          "border-color":"black", 
          "border-opacity":1,
           "background-fit":"none",
          "overlay-opacity": "0.1",
          "overlay-color":"white",
          shape:"rectangle"
        }
      },
      {
        selector: ':parent',
        style: {
			          "border-width":1,
          "background-color": "white",
          "z-compound-depth": "auto",
          "border-color": `black`,
          "background-position-x": "100%",
          "background-position-y": "0%",
          "background-opacity": "0,1",
          "background-clip":"none",
          "bounds-expansion":["50px","50px", "0px", "0px"],
          width: 50,
          height: 50,
        
        }
      },

      {
        selector: "node.cy-expand-collapse-collapsed-node",
        style: {
          "background-color": "white",
          "shape": "rectangle",
          "line-color":"blue"
        }
      },
      {
        selector: 'edge',
        style: {
          'width': 1,
          'line-color': 'black',
          'curve-style': 'bezier',
		   width: 3,
          //   visibility: "hidden",
          "target-arrow-shape": (ele) => renderEdge(ele).targetArrowShape,
          "target-arrow-color": (ele) => renderEdge(ele).targetArrowColor,
          "target-arrow-fill": (ele) => renderEdge(ele).targetArrowFill,
          "source-arrow-shape": (ele) => renderEdge(ele).sourceArrowShape,
          "source-arrow-color": (ele) => renderEdge(ele).sourceArrowColor,
          "source-arrow-fill": (ele) => renderEdge(ele).sourceArrowFill,
          "line-style": (ele) => renderEdge(ele).lineStyle,
          "mid-source-arrow-shape": (ele) => renderEdge(ele).midSourceArrowShape,
          "mid-source-arrow-color": (ele) =>renderEdge(ele).midSourceArrowColor,
          "line-dash-pattern": (ele) => renderEdge(ele).lineDashPattern,
          "target-endpoint": "inside-to-node",
          "target-distance-from-node": 0,
          label: (ele) => renderEdge(ele).label,
          "source-endpoint": "outside-to-node-or-label",
          "target-endpoint": "outside-to-node-or-label",
          "source-distance-from-node": "10px",
          "target-distance-from-node": "10px"
        }
      },
      {
        selector: ':selected',
        style: {
          'overlay-color': "#6c757d",
          'overlay-opacity': 0.3,
          'background-color': "#999999"
        }
      },
      {
        selector: 'edge[edgeType="type1"]',
        style: {
          'width': 3,
          'line-color': edgeStyles["type1"].color,
          'target-arrow-shape': edgeStyles["type1"].arrowShape,
          'target-arrow-color': edgeStyles["type1"].color,
        }
      },
      {
        selector: 'edge[edgeType="type2"]',
        style: {
          'width': 3,
          'line-color': edgeStyles["type2"].color,
          'target-arrow-shape': edgeStyles["type2"].arrowShape,
          'target-arrow-color': edgeStyles["type2"].color,
        }
      },
      {
        selector: 'edge[edgeType="type3"]',
        style: {
          'width': 3,
          'line-color': edgeStyles["type3"].color,
          'target-arrow-shape': edgeStyles["type3"].arrowShape,
          'target-arrow-color': edgeStyles["type3"].color,
        }
      },
      {
        selector: 'edge.cy-expand-collapse-collapsed-edge',
        style:
        {
          "text-outline-color": "#ffffff",
          "text-outline-width": "2px",
          'label': (e) => {
            return '(' + e.data('collapsedEdges').length + ')';
          },
          'width': function (edge) {
            const n = edge.data('collapsedEdges').length;
            return (3 + Math.log2(n)) + 'px';
          },
          'line-style': 'dashed',
          'line-color': setColor4CompoundEdge.bind(this),
          'target-arrow-color': setColor4CompoundEdge.bind(this),
          'target-arrow-shape': setTargetArrowShape.bind(this),
          'source-arrow-shape': setSourceArrowShape.bind(this),
          'source-arrow-color': setColor4CompoundEdge.bind(this),
        }
      },
    ],

    elements: hardcoded_elems
  });

  var api = cy.expandCollapse('get');
  var elements = null;
  var markovClusteringClickable = true;


  function setClusterBtn(isEnabled) {
    markovClusteringClickable = isEnabled;
    document.getElementById("apply-markov-clustering").disabled = !isEnabled;
  }

  document.getElementById("collapseRecursively").addEventListener("click", function () {
    api.collapseRecursively(cy.$(":selected"));
  });

  document.getElementById("expandRecursively").addEventListener("click", function () {
    api.expandRecursively(cy.$(":selected"));
  });

  document.getElementById("expandAllAndRemove").addEventListener("click", function () {
    api.expandAll();
    elements = cy.elements().remove();
  });

  document.getElementById("loadInCollapsedState").addEventListener("click", function () {
    if (elements) {
      cy.add(elements);
      api.collapseAll();
      elements = null;
    }
    else {
      console.warn("Remove elements first by clicking on 'Expand all and remove' button.");
    }
  });

  document.getElementById("collapseAll").addEventListener("click", function () {
    api.collapseAll();
  });

  document.getElementById("expandAll").addEventListener("click", function () {
    api.expandAll();
  });

  function applyMarkovClustering() {
    var clusteringDepth = document.getElementById("clustering-depth-input").value;
    if (clusteringDepth < 1)
      return;
    var createdNodeIds = [];
    //cy.startBatch();
    
    for (var i = 0; i < clusteringDepth; i++) {
      //get clusters for this depth level
      let clusters = cy.elements().markovClustering();

      for (var j = 0; j < clusters.length; j++) {
        let parentId = "p_" + i + "_" + j;
        
        let clusterBoundingBox = clusters[j].bb();
        let parentPos = {x: clusterBoundingBox.x1 + clusterBoundingBox.w / 2, y: clusterBoundingBox.y1 + clusterBoundingBox.h / 2};
        
        var newNode = cy.add({
          group: 'nodes',
          data: {
            id: parentId
          },
          position: parentPos
        });
        createdNodeIds.push(parentId);
        clusters[j].move({
          parent: parentId
        });
      }
      var nodesToRemove = cy.collection();
      cy.nodes().forEach(function (node) {
        if (createdNodeIds.includes(node.id()) && node.degree() < 1 && !node.isParent()) {
          nodesToRemove = nodesToRemove.union(node);
        }
      });
      cy.remove(nodesToRemove);

      api.collapseAll();
    }

    //cy.endBatch();
    setClusterBtn(false);
  }

  document.getElementById("graphml-input").addEventListener("change", function (evt) {
    //read graphML file
    let files = evt.target.files;
    let reader = new FileReader();
    let contents;
    reader.readAsText(files[0]);
    reader.onload = function (event) {
      contents = event.target.result;

      cy.startBatch();
      cy.elements().remove();
      cy.graphml({ layoutBy: 'preset'});
      cy.graphml(contents);
      cy.endBatch();

      cy.makeLayout({
        name: 'fcose',
        randomize: true,
        fit: true,
        animate: false
      }).run();

      //to be able to open the same file again
      document.getElementById("graphml-input").value = "";
      //avoid adding the same listener multiple times
      if (!markovClusteringClickable) {
        setClusterBtn(true);
      }
      if (document.getElementById("cluster-by-default").checked) {
        applyMarkovClustering();
      }
    };

  });

  document.getElementById("apply-markov-clustering").addEventListener("click", applyMarkovClustering);

  function getEdgeOptions() {
    const groupEdgesOfSameTypeOnCollapse = document.getElementById('groupEdges').checked;
    const allowNestedEdgeCollapse = document.getElementById('allowNestedEdgeCollapse').checked;
    return { groupEdgesOfSameTypeOnCollapse: groupEdgesOfSameTypeOnCollapse, allowNestedEdgeCollapse: allowNestedEdgeCollapse };
  }

  document.getElementById("collapseSelectedEdges").addEventListener("click", function () {
    const edges = cy.edges(":selected");
    if (edges.length >= 2) {
      api.collapseEdges(edges, getEdgeOptions());
    }
  });

  document.getElementById("expandSelectedEdges").addEventListener("click", function () {
    const edges = cy.edges(":selected");
    if (edges.length > 0) {
      api.expandEdges(edges, getEdgeOptions());
    }
  });

  document.getElementById("collapseAllEdges").addEventListener("click", function () {
    api.collapseAllEdges(getEdgeOptions());
  });

  document.getElementById("collapseEdgesBetweenNodes").addEventListener("click", function () {
    api.collapseEdgesBetweenNodes(cy.nodes(":selected"), getEdgeOptions());
  });

  document.getElementById("expandEdgesBetweenNodes").addEventListener("click", function () {
    api.expandEdgesBetweenNodes(cy.nodes(":selected"), getEdgeOptions());
  });

  document.getElementById("expandAllEdges").addEventListener("click", function () {
    if (cy.edges(".cy-expand-collapse-collapsed-edge").length > 0) {
      api.expandAllEdges();
    }
  });

  document.getElementById('saveAsJson').addEventListener('click', function () {
    api.saveJson(cy.$());
  });

  document.getElementById('loadFromJson').addEventListener('click', function () {
    const el = document.getElementById('load-from-inp');
    el.value = '';
    el.click();
  });

  document.getElementById('load-from-inp').addEventListener('change', function () {
    readTxtFile(this.files[0], function (txt) {
      cy.$().remove();
      api.loadJson(txt);
    })
  });

  document.getElementById('add-compound').addEventListener('click', function () {
    const elems = cy.nodes(':selected');
    if (elems.length < 1) {
      return;
    }
    const parent = elems[0].parent().id();
    for (let i = 1; i < elems.length; i++) {
      if (parent !== elems[i].parent().id()) {
        return;
      }
    }
    const id = new Date().getTime();
    addParentNode(id, parent);
    for (let i = 0; i < elems.length; i++) {
      elems[i].move({ parent: 'c' + id });
    }
  });

  document.getElementById('remove-compound').addEventListener('click', function () {
    const elems = cy.nodes(':selected').filter(':compound');
    if (elems.length < 1) {
      return;
    }
    for (let i = 0; i < elems.length; i++) {
      // expand if collapsed
      if (elems[i].hasClass('cy-expand-collapse-collapsed-node')) {
        api.expand(elems[i], { layoutBy: null, fisheye: false, animate: false });
      }
      const grandParent = elems[i].parent().id() ?? null;
      const children = elems[i].children();
      children.move({ parent: grandParent });
      cy.remove(elems[i]);
    }
  });

  activateAccordions();

  setTimeout(() => {
    document.getElementsByClassName('accordion')[1].click();
  }, 500);
}

document.addEventListener('DOMContentLoaded', main);

// Ajout Nicolas
function business_actor_svg() { return "data:image/svg+xml;base64," + btoa(business_actor.outerHTML);}
function access_svg() { return "data:image/svg+xml;base64," + btoa(archimate.access.outerHTML);}
function application_collaboration_svg() { return "data:image/svg+xml;base64," + btoa(application_collaboration.outerHTML);}
function application_component_svg() { return "data:image/svg+xml;base64," + btoa(application_component.outerHTML);}
function application_event_svg() { return "data:image/svg+xml;base64," + btoa(application_event.outerHTML);}
function application_function_svg() { return "data:image/svg+xml;base64," + btoa(application_function.outerHTML);}
function application_interaction_svg() { return "data:image/svg+xml;base64," + btoa(application_interaction.outerHTML);}
function application_interface_svg() { return "data:image/svg+xml;base64," + btoa(application_interface.outerHTML);}
function application_process_svg() { return "data:image/svg+xml;base64," + btoa(application_process.outerHTML);}
function application_service_svg() { return "data:image/svg+xml;base64," + btoa(application_service.outerHTML);}
function artifact_svg() { return "data:image/svg+xml;base64," + btoa(artifact.outerHTML);}
function assessment_svg() { return "data:image/svg+xml;base64," + btoa(assessment.outerHTML);}
function business_collaboration_svg() {  return "data:image/svg+xml;base64," + btoa(business_collaboration.outerHTML);}
function business_event_svg() {  return "data:image/svg+xml;base64," + btoa(business_event.outerHTML);}
function business_function_svg() {  return "data:image/svg+xml;base64," + btoa(business_function.outerHTML);}
function business_interaction_svg() {  return "data:image/svg+xml;base64," + btoa(business_interaction.outerHTML);}
function business_interface_svg() {  return "data:image/svg+xml;base64," + btoa(business_interface.outerHTML);}
function business_object_svg() {  return "data:image/svg+xml;base64," + btoa(business_object.outerHTML);}
function business_process_svg() {  return "data:image/svg+xml;base64," + btoa(business_process.outerHTML);}
function business_role_svg() {  return "data:image/svg+xml;base64," + btoa(business_role.outerHTML);}
function business_service_svg() {  return "data:image/svg+xml;base64," + btoa(business_service.outerHTML);}
function capability_svg() {  return "data:image/svg+xml;base64," + btoa(capability.outerHTML);}
function communication_network_svg() {  return "data:image/svg+xml;base64," + btoa(communication_network.outerHTML);}
function composition_svg() {  return "data:image/svg+xml;base64," + btoa(composition.outerHTML);}
function constraint_svg() {  return "data:image/svg+xml;base64," + btoa(constraint.outerHTML);}
function course_of_action_svg() {  return "data:image/svg+xml;base64," + btoa(course_of_action.outerHTML);}
function contract_svg() {  return "data:image/svg+xml;base64," + btoa(contract.outerHTML);}
function data_object_svg() {  return "data:image/svg+xml;base64," + btoa(data_object.outerHTML);}
function deliverable_svg() {  return "data:image/svg+xml;base64," + btoa(deliverable.outerHTML);}
function device_svg() {  return "data:image/svg+xml;base64," + btoa(device.outerHTML);}
function distribution_network_svg() {  return "data:image/svg+xml;base64," + btoa(distribution_network.outerHTML);}
function driver_svg() {  return "data:image/svg+xml;base64," + btoa(driver.outerHTML);}
function equipment_svg() {  return "data:image/svg+xml;base64," + btoa(equipment.outerHTML);}
function facility_svg() {  return "data:image/svg+xml;base64," + btoa(facility.outerHTML);}
function folder_svg() {  return "data:image/svg+xml;base64," + btoa(folder.outerHTML);}
function gap_svg() {  return "data:image/svg+xml;base64," + btoa(capability.outerHTML);}
function goal_svg() {  return "data:image/svg+xml;base64," + btoa(goal.outerHTML);}
function group_svg() {  return "data:image/svg+xml;base64," + btoa(group.outerHTML);}
function grouping_svg() {  return "data:image/svg+xml;base64," + btoa(grouping.outerHTML);}
function implementation_event_svg() {  return "data:image/svg+xml;base64," + btoa(implementation_event.outerHTML);}
function layer_svg() {  return "data:image/svg+xml;base64," + btoa(layer.outerHTML);}
function location_svg() {  return "data:image/svg+xml;base64," + btoa(location2.outerHTML);}
function group_svg() {  return "data:image/svg+xml;base64," + btoa(group.outerHTML);}
function material_svg() {  return "data:image/svg+xml;base64," + btoa(material.outerHTML);}
function meaning_svg() {  return "data:image/svg+xml;base64," + btoa(meaning.outerHTML);}
function node_svg() {  return "data:image/svg+xml;base64," + btoa(node.outerHTML);}
function model_svg() {  return "data:image/svg+xml;base64," + btoa(model.outerHTML);}
function outcome_svg() {  return "data:image/svg+xml;base64," + btoa(outcome.outerHTML);}
function package_svg() {  return "data:image/svg+xml;base64," + btoa(package.outerHTML);}
function path_svg() {  return "data:image/svg+xml;base64," + btoa(path.outerHTML);}
function plateau_svg() {  return "data:image/svg+xml;base64," + btoa(plateau.outerHTML);}
function principle_svg() {  return "data:image/svg+xml;base64," + btoa(principle.outerHTML);}
function product_svg() {  return "data:image/svg+xml;base64," + btoa(product.outerHTML);}
function representation_svg() {  return "data:image/svg+xml;base64," + btoa(representation.outerHTML);}
function requirement_svg() {  return "data:image/svg+xml;base64," + btoa(requirement.outerHTML);}
function resource_svg() {  return "data:image/svg+xml;base64," + btoa(resource.outerHTML);}
function stakeholder_svg() {  return "data:image/svg+xml;base64," + btoa(stakeholder.outerHTML);}
function system_software_svg() {  return "data:image/svg+xml;base64," + btoa(system_software.outerHTML);}
function technology_collaboration_svg() {  return "data:image/svg+xml;base64," + btoa(technology_collaboration.outerHTML);}
function technology_function_svg() {  return "data:image/svg+xml;base64," + btoa(technology_function.outerHTML);}
function technology_event_svg() {  return "data:image/svg+xml;base64," + btoa(technology_event.outerHTML);}
function technology_interaction_svg() {  return "data:image/svg+xml;base64," + btoa(technology_interaction.outerHTML);}
function technology_interface_svg() {  return "data:image/svg+xml;base64," + btoa(interface_collaboration.outerHTML);}
function technology_process_svg() {  return "data:image/svg+xml;base64," + btoa(technology_process.outerHTML);}
function technology_service_svg() {  return "data:image/svg+xml;base64," + btoa(technology_service.outerHTML);}
function value_svg() {  return "data:image/svg+xml;base64," + btoa(value.outerHTML);}
function workpackage_svg() {  return "data:image/svg+xml;base64," + btoa(workpackage.outerHTML);}

function view_svg() {  return "data:image/svg+xml;base64," + btoa(view.outerHTML);}
function viewpoint_svg() {  return "data:image/svg+xml;base64," + btoa(viewpoint.outerHTML);}
function extension_svg() {  return "data:image/svg+xml;base64," + btoa(extension.outerHTML);}
function relations_svg() {  return "data:image/svg+xml;base64," + btoa(relations.outerHTML);}
function drawing_svg()   {  return "data:image/svg+xml;base64," + btoa(drawing.outerHTML);}
function note_svg()      {  return "data:image/svg+xml;base64," + btoa(note.outerHTML);}
function metamodel_svg() {  return "data:image/svg+xml;base64," + btoa(metamodel.outerHTML);}

function business_ecosystem_svg() {  return "data:image/svg+xml;base64," + btoa(business_ecosystem.outerHTML); }
function enterprise_network_svg() {  return "data:image/svg+xml;base64," + btoa(enterprise_network.outerHTML); }
function enterprise_svg() {  return "data:image/svg+xml;base64," + btoa(enterprise.outerHTML); }
function department_svg() {  return "data:image/svg+xml;base64," + btoa(department.outerHTML); }
function service_svg() {  return "data:image/svg+xml;base64," + btoa(service.outerHTML); }
function project_svg() {  return "data:image/svg+xml;base64," + btoa(project.outerHTML); }
function program_svg() {  return "data:image/svg+xml;base64," + btoa(program.outerHTML); }
function team_svg() {  return "data:image/svg+xml;base64," + btoa(team.outerHTML); }
function person_svg() {  return "data:image/svg+xml;base64," + btoa(person.outerHTML); }
function not_defined_svg() {  return "data:image/svg+xml;base64," + btoa(not_defined.outerHTML); }

function access_svg() {  return "data:image/svg+xml;base64," + btoa(access.outerHTML); }
function aggregation_svg() {  return "data:image/svg+xml;base64," + btoa(aggregation.outerHTML); }
function assignment_svg() {  return "data:image/svg+xml;base64," + btoa(assignment.outerHTML); }
function association_svg() {  return "data:image/svg+xml;base64," + btoa(association.outerHTML); }
function composition_svg() {  return "data:image/svg+xml;base64," + btoa(composition.outerHTML); }
function flow_svg() {  return "data:image/svg+xml;base64," + btoa(flow.outerHTML); }
function influence_svg() {  return "data:image/svg+xml;base64," + btoa(influence.outerHTML); }
function realization_svg() {  return "data:image/svg+xml;base64," + btoa(realization.outerHTML); }
function serving_svg() {  return "data:image/svg+xml;base64," + btoa(serving.outerHTML); }
function specialization_svg() {  return "data:image/svg+xml;base64," + btoa(specialization.outerHTML); }
function triggering_svg() {  return "data:image/svg+xml;base64," + btoa(triggering.outerHTML); }


function ArchiMate(type) {
  const rectangle = "rectangle";
  switch (type) {
    
	case "access"                    :return access_svg();                           break; 
    case "aggregation"               :return aggregationt_svg();                     break;
    case "assignment"                :return assignment_svg();                       break;
	case "association"               :return association_svg();                      break;
	case "composition"               :return composition_svg();                      break;
    case "flow"                      :return flow_svg();                             break;
    case "influence"                 :return influence_svg();                        break;
    case "realization"               :return realization_svg();                      break;
    case "serving"                   :return serving_svg();                          break;
    case "specialization"            :return specialization_svg();                   break;
    case "triggering"                :return triggering_svg();                       break;


    case "workpackage"               :return workpackage_svg();                      break;
    case "enterprise"                :return enterprise_svg();                       break;
    case "project"                   :return project_svg();                          break;
    case "team"                      :return team_svg();                             break;
    case "program"                   :return program_svg();                          break;
    case "person"                    :return person_svg();                           break;
    case "enterprise-network"        :return enterprise_network_svg();               break;
    case "business-ecosystem"        :return business_ecosystem_svg();               break;
    case "department"                :return department_svg();                       break;
    case "service"                   :return service_svg();                          break;
    case "artifact"                  :return artifact_svg();                         break;
    case "application-collaboration" :return application_collaboration_svg();        break;
    case "application-component"     :return application_component_svg();            break;
    case "application-event"         :return application_event_svg();                break;
    case "application-function"      :return application_function_svg();             break;
    case "application-interface"     :return application_interface_svg();            break;
    case "application-interaction"   :return application_interaction_svg();          break;
    case "application-process"       :return application_process_svg();              break;
    case "application-service"       :return application_service_svg();              break;
    case "assessment"                :return assessment_svg();                       break;


    case "business-actor"            :return business_actor_svg();                   break;
    case "business-collaboration"    :return business_collaboration_svg();           break;
    case "business-function"         :return business_function_svg();                break;
    case "business-event"            :return business_event_svg();                   break;
    case "business-interaction"      :return business_interaction_svg();             break;
    case "business-interface"        :return business_interface_svg();               break;
    case "business-object"           :return business_object_svg();                  break;
    case "business-process"          :return business_process_svg();                 break;
    case "business-role"             :return business_role_svg();                    break;
    case "business-service"          :return business_service_svg();                 break;
    case "capability"                :return capability_svg();                       break;
    case "communication-network"     :return communication_network_svg();            break;
    case "composition"               :return composition_svg();                      break;
    case "constraint"                :return constraint_svg();                       break;
    case "contract"                  :return contract_svg();                         break;
    case "course-of-action"          :return course_of_action_svg();                 break;
    case "data-object"               :return data_object_svg();                      break;
    case "deliverable"               :return deliverable_svg();                      break;
    case "device"                    :return device_svg();                           break;
    case "distribution-network"      :return distribution_network_svg();             break;
    case "driver"                    :return driver_svg();                           break;
    case "equipment"                 :return equipment_svg();                        break;
    case "facility"                  :return facility_svg();                         break;
    case "folder"                    :return folder_svg();                           break;
    case "gap"                       :return gap_svg();                              break;
    case "goal"                      :return goal_svg();                             break;
    case "group"                     :return group_svg();                            break;
    case "grouping"                  :return grouping_svg();                         break;
    case "implementation-event"      :return implementation_event_svg();             break;
    case "layer"                     :return layer_svg();                            break;
    case "location"                  :return location_svg();                         break;
    case "material"                  :return material_svg();                         break;
    case "meaning"                   :return meaning_svg();                          break;
    case "model"                     :return model_svg();                            break;
    case "node"                      :return node_svg();                             break;
    case "outcome"                   :return outcome_svg();                          break;
    case "package"                   :return package_svg();                          break;
    case "path"                      :return path_svg();                             break;
    case "plateau"                   :return plateau_svg();                          break;
    case "principle"                 :return principle_svg();                        break;
    case "product"                   :return product_svg();                          break;
    case "representation"            :return representation_svg();                   break;
    case "requirement"               :return requirement_svg();                      break;
    case "resource"                  :return resource_svg();                         break;
    case "stakeholder"               :return stakeholder_svg();                      break;
    case "system-software"           :return system_software_svg();                  break;
    case "technology-collaboration"  :return technology_collaboration_svg();         break;
    case "technology-event"          :return technology_event_svg();                 break;
    case "technology-function"       :return technology_function_svg();              break;
    case "technology-interaction"    :return technology_interaction_svg();           break;
    case "technology-interface"      :return technology_interface_svg();             break;
    case "technology-process"        :return technology_process_svg();               break;
    case "technology-service"        :return technology_service_svg();               break;
    case "value"                     :return value_svg();                            break;
    case "view"                      :return view_svg();                             break;
    case "viewpoint"                 :return viewpoint_svg();                        break;   
    case "extension"                 :return extension_svg();                        break; 
	case "relations"                 :return relations_svg();                        break; 
	case "drawing"                   :return drawing_svg();                          break; 
    case "note"                      :return note_svg();                             break; 
    case "metamodel"                 :return metamodel_svg();                             break;
    default                          :return not_defined_svg();                      break;
  }
}

function renderEdge(ele) {
  var sourceArrowShape = "none";
  var sourceArrowColor = "black";
  var sourceArrowFill = "fill";
  var targetArrowShape = "none";
  var targetArrowColor = "black";
  var targetArrowFill = "fill";
  var sourceArrowShape = "none";
  var lineStyle = "solid";
  var midSourceArrowShape = "none";
  var midSourceArrowColor = "black";
  var lineDashPattern = [5, 5];
  var label = undefined;

  label = ele.data("label");

  switch (ele.data("type")) {
    case "realization-relationship":
      targetArrowShape = "triangle";
      targetArrowFill = "hollow";
      lineStyle = "dashed";
      break;

    case "specialization-relationship":
      targetArrowShape = "triangle";
      targetArrowFill = "hollow";
      break;

    case "triggering-relationship":
      targetArrowShape = "triangle";
      break;

    case "flow-relationship":
      targetArrowShape = "triangle";
      lineStyle = "dashed";
      lineDashPattern = [10, 10];
      break;

    case "serving-relationship":
      targetArrowShape = "chevron";
      break;

    case "influence-relationship":
      targetArrowShape = "chevron";
      lineStyle = "dashed";
      lineDashPattern = [10, 10];
      break;

    case "assignment-relationship":
      targetArrowShape = "chevron";
      sourceArrowShape = "circle";
      break;
    case "access-relationship":
      lineStyle = "dashed";
      //     midSourceArrowShape = "triangle";
      break;
    case "aggregation-relationship":
      sourceArrowShape = "diamond";
      sourceArrowFill = "hollow";

      break;
    case "composition-relationship":
      sourceArrowShape = "diamond";
      sourceArrowFill = "filled";

      break;
    case "association-relationship":
      midSourceArrowShape = "triangle";
      break;
    default:
      break;
  }

  return {
    sourceArrowShape: sourceArrowShape,
    sourceArrowColor: sourceArrowColor,
    sourceArrowFill: sourceArrowFill,
    targetArrowShape: targetArrowShape,
    targetArrowColor: targetArrowColor,
    targetArrowFill: targetArrowFill,
    sourceArrowShape: sourceArrowShape,
    lineStyle: lineStyle,
    midSourceArrowShape: midSourceArrowShape,
    midSourceArrowColor: midSourceArrowColor,
    lineDashPattern: lineDashPattern,
    label: label
  };
}

function renderNode(ele) {
  const iconColor = "blue";
  const size = 50; // may need to calculate this yourself
  const iconResize = 1; // adjust this for more "padding" (bigger number = more smaller icon)
  const width = size
  const height = size;
  const type = ele.data("type");
  var icon= ArchiMate(type);

 // const specialization = ele.data("specialization");
 //var icon = archimateSVG;
 // const dColor = propertyColor(ele.data(coloredProperty));
 // if (specialization === undefined) {
 // } else {
 //   icon = ArchiMate(specialization).svg;
 // }

//icon="./img/Actor.svg";


  return {
    img: icon,
    height,
    width,
    iconColor
  };
}

