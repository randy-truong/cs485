var vlSpec1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2019-01')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2019-02')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec3 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2019-03')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec4 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2019-04')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec5 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2019-05')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec6 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2019-06')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec7 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2019-07')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec8 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2019-08')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec9 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2019-09')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec10 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2019-10')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec11 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2019-11')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec12 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2019-12')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec13 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2020-01')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec14 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2020-02')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec15 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2020-03')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec16 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2020-04')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec17 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2020-05')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec18 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2020-06')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec19 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2020-07')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec20 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2020-08')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec21 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2020-09')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec22 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2020-10')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec23 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2020-11')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec24 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2020-12')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec25 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2021-01')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec26 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2021-02')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec27 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2021-03')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec28 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2021-04')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec29 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2021-05')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec30 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2021-06')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec31 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2021-07')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec32 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2021-08')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec33 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2021-09')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec34 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2021-10')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};

var vlSpec35 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2021-11')"}
        ],
  "vconcat": [
    {
      "layer": [{
        "title": "Monthly Traveler Mobility Between States",
        "mark": {"type": "rect"},
        "encoding": {
          "x": {
            "type": "nominal",
            "field": "ORIGIN_STATE_NM",
            "title": "Origin State"
          },
          "y": {
            "type": "nominal",
            "field": "DEST_STATE_NM",
            "title": "Destination State"
          },
          "fill": {
            "field": "PASSENGERS",
            "type": "quantitative",
            "title": "# Travelers"
          },
          "color": {
            "legend": {
              "title": "# Passengers Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          },
          "tooltip": [
            {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin"},
            {"field": "DEST_STATE_NM", "type": "nominal", "title": "Destination"}, {"field": "PASSENGERS", "type": "quantitative", "title": "Traveler Count"}
          ],
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {
      "title": "Monthly Total Number of Travelers Departing by State",
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "ORIGIN_STATE_NM", "type": "nominal", "title": "Origin State"},
        "y": {"field": "PASSENGERS", "type": "quantitative", "title": "Number of Travelers"},
        "tooltip": {"field": "PASSENGERS", "type": "quantitative"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      },
      
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  },
  "config": {"view": {"step": 9}}
};


vegaEmbed('#randy1', vlSpec1);
vegaEmbed('#randy2', vlSpec2);
vegaEmbed('#randy3', vlSpec3);
vegaEmbed('#randy4', vlSpec4);
vegaEmbed('#randy5', vlSpec5);
vegaEmbed('#randy6', vlSpec6);
vegaEmbed('#randy7', vlSpec7);
vegaEmbed('#randy8', vlSpec8);
vegaEmbed('#randy9', vlSpec9);
vegaEmbed('#randy10', vlSpec10);
vegaEmbed('#randy11', vlSpec11);
vegaEmbed('#randy12', vlSpec12);

vegaEmbed('#randy13', vlSpec13);
vegaEmbed('#randy14', vlSpec14);
vegaEmbed('#randy15', vlSpec15);
vegaEmbed('#randy16', vlSpec16);
vegaEmbed('#randy17', vlSpec17);
vegaEmbed('#randy18', vlSpec18);
vegaEmbed('#randy19', vlSpec19);
vegaEmbed('#randy20', vlSpec20);
vegaEmbed('#randy21', vlSpec21);
vegaEmbed('#randy22', vlSpec22);
vegaEmbed('#randy23', vlSpec23);
vegaEmbed('#randy24', vlSpec24);

vegaEmbed('#randy25', vlSpec25);
vegaEmbed('#randy26', vlSpec26);
vegaEmbed('#randy27', vlSpec27);
vegaEmbed('#randy28', vlSpec28);
vegaEmbed('#randy29', vlSpec29);
vegaEmbed('#randy30', vlSpec30);
vegaEmbed('#randy31', vlSpec31);
vegaEmbed('#randy32', vlSpec32);
vegaEmbed('#randy33', vlSpec33);
vegaEmbed('#randy34', vlSpec34);
vegaEmbed('#randy35', vlSpec35);
