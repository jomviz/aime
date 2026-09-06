var APP_DATA = {
  "scenes": [
    {
      "id": "0-1---patio-de-ingreso",
      "name": "1 - Patio de Ingreso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07643810761444314,
          "pitch": 0.29645357876170664,
          "rotation": 0,
          "target": "1-2---cocina-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2---cocina-comedor",
      "name": "2 - Cocina Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6520188300736152,
          "pitch": 0.42472137427868795,
          "rotation": 0,
          "target": "5-6---patio"
        },
        {
          "yaw": -2.5866956768840836,
          "pitch": 0.4400482737956537,
          "rotation": 0,
          "target": "0-1---patio-de-ingreso"
        },
        {
          "yaw": -2.2029669319729557,
          "pitch": 0.32792635352446453,
          "rotation": 0,
          "target": "3-4---dormitorio-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3---bao",
      "name": "3 - Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8810878438141891,
          "pitch": 0.7327583886672269,
          "rotation": 0,
          "target": "1-2---cocina-comedor"
        },
        {
          "yaw": 2.5854371918294614,
          "pitch": 0.6457007714089933,
          "rotation": 0,
          "target": "4-5---dormitorio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4---dormitorio-principal",
      "name": "4 - Dormitorio principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5561873998822513,
          "pitch": 0.330127220221641,
          "rotation": 0,
          "target": "4-5---dormitorio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-5---dormitorio-2",
      "name": "5 - Dormitorio 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1377736028267194,
          "pitch": 0.5713175388593559,
          "rotation": 0,
          "target": "2-3---bao"
        },
        {
          "yaw": 2.6230116093372304,
          "pitch": 0.5606821541440556,
          "rotation": 0,
          "target": "3-4---dormitorio-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-6---patio",
      "name": "6 - Patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2239978947315624,
          "pitch": 0.31968317775658583,
          "rotation": 0,
          "target": "1-2---cocina-comedor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
