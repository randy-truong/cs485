var vlSpec1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "transform": [
          {"filter": "datum.DATE === toString('2019-01')"}
        ],
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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
  "hconcat": [
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


$(document).ready(function() {
        $('#myRange').on('input', function() {
          if (this.value == 1) {
            $('#randy1').show();
            $('#date1').show();
          } else {
            $('#randy1').hide();
            $('#date1').hide();
          }
          if (this.value == 2) {
            $('#randy2').show();
            $('#date2').show();
          } else {
            $('#randy2').hide();
            $('#date2').hide();
          }
          if (this.value == 3) {
            $('#randy3').show();
            $('#date3').show();
          } else {
            $('#randy3').hide();
            $('#date3').hide();
          }
          if (this.value == 4) {
            $('#randy4').show();
            $('#date4').show();
          } else {
            $('#randy4').hide();
            $('#date4').hide();
          }
          if (this.value == 5) {
            $('#randy5').show();
            $('#date5').show();
          } else {
            $('#randy5').hide();
            $('#date5').hide();
          }
          if (this.value == 6) {
            $('#randy6').show();
            $('#date6').show();
          } else {
            $('#randy6').hide();
            $('#date6').hide();
          }
          if (this.value == 7) {
            $('#randy7').show();
            $('#date7').show();
          } else {
            $('#randy7').hide();
            $('#date7').hide();
          }
          if (this.value == 8) {
            $('#randy8').show();
            $('#date8').show();
          } else {
            $('#randy8').hide();
            $('#date8').hide();
          }
          if (this.value == 9) {
            $('#randy9').show();
            $('#date9').show();
          } else {
            $('#randy9').hide();
            $('#date9').hide();
          }
          if (this.value == 10) {
            $('#randy10').show();
            $('#date10').show();
          } else {
            $('#randy10').hide();
            $('#date10').hide();
          }
          if (this.value == 11) {
            $('#randy11').show();
            $('#date11').show();
          } else {
            $('#randy11').hide();
            $('#date11').hide();
          }
          if (this.value == 12) {
            $('#randy12').show();
            $('#date12').show();
          } else {
            $('#randy12').hide();
            $('#date12').hide();
          }
          if (this.value == 13) {
            $('#randy13').show();
            $('#date13').show();
          } else {
            $('#randy13').hide();
            $('#date13').hide();
          }
          if (this.value == 14) {
            $('#randy14').show();
            $('#date14').show();
          } else {
            $('#randy14').hide();
            $('#date14').hide();
          }
          if (this.value == 15) {
            $('#randy15').show();
            $('#date15').show();
          } else {
            $('#randy15').hide();
            $('#date15').hide();
          }
          if (this.value == 16) {
            $('#randy16').show();
            $('#date16').show();
          } else {
            $('#randy16').hide();
            $('#date16').hide();
          }
          if (this.value == 17) {
            $('#randy17').show();
            $('#date17').show();
          } else {
            $('#randy17').hide();
            $('#date17').hide();
          }
          if (this.value == 18) {
            $('#randy18').show();
            $('#date18').show();
          } else {
            $('#randy18').hide();
            $('#date18').hide();
          }
          if (this.value == 19) {
            $('#randy19').show();
            $('#date19').show();
          } else {
            $('#randy19').hide();
            $('#date19').hide();
          }
          if (this.value == 20) {
            $('#randy20').show();
            $('#date20').show();
          } else {
            $('#randy20').hide();
            $('#date20').hide();
          }
          if (this.value == 21) {
            $('#randy21').show();
            $('#date21').show();
          } else {
            $('#randy21').hide();
            $('#date21').hide();
          }
          if (this.value == 22) {
            $('#randy22').show();
            $('#date22').show();
          } else {
            $('#randy22').hide();
            $('#date22').hide();
          }
          if (this.value == 23) {
            $('#randy23').show();
            $('#date23').show();
          } else {
            $('#randy23').hide();
            $('#date23').hide();
          }
          if (this.value == 24) {
            $('#randy24').show();
            $('#date24').show();
          } else {
            $('#randy24').hide();
            $('#date24').hide();
          }
          if (this.value == 25) {
            $('#randy25').show();
            $('#date25').show();
          } else {
            $('#randy25').hide();
            $('#date25').hide();
          }
          if (this.value == 26) {
            $('#randy26').show();
            $('#date26').show();
          } else {
            $('#randy26').hide();
            $('#date26').hide();
          }
          if (this.value == 27) {
            $('#randy27').show();
            $('#date27').show();
          } else {
            $('#randy27').hide();
            $('#date27').hide();
          }
          if (this.value == 28) {
            $('#randy28').show();
            $('#date28').show();
          } else {
            $('#randy28').hide();
            $('#date28').hide();
          }
          if (this.value == 29) {
            $('#randy29').show();
            $('#date29').show();
          } else {
            $('#randy29').hide();
            $('#date29').hide();
          }
          if (this.value == 30) {
            $('#randy30').show();
            $('#date30').show();
          } else {
            $('#randy30').hide();
            $('#date30').hide();
          }
          if (this.value == 31) {
            $('#randy31').show();
            $('#date31').show();
          } else {
            $('#randy31').hide();
            $('#date31').hide();
          }
          if (this.value == 32) {
            $('#randy32').show();
            $('#date32').show();
          } else {
            $('#randy32').hide();
            $('#date32').hide();
          }
          if (this.value == 33) {
            $('#randy33').show();
            $('#date33').show();
          } else {
            $('#randy33').hide();
            $('#date33').hide();
          }
          if (this.value == 34) {
            $('#randy34').show();
            $('#date34').show();
          } else {
            $('#randy34').hide();
            $('#date34').hide();
          }
          if (this.value == 35) {
            $('#randy35').show();
            $('#date35').show();
          } else {
            $('#randy35').hide();
            $('#date35').hide();
          }

        });
      });