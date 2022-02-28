var vlSpec1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "vconcat": [
    {
      "layer": [{
        "transform": [
          {"filter": "datum.DATE === toString('2020-02')"}
        ],
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

      "transform": [
          {"filter": "datum.DATE === toString('2020-02')"}
      ],
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
  "config": {"view": {"step": 12}}
};

var vlSpec2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "vconcat": [
    {
      "layer": [{
        "transform": [
          {"filter": "datum.DATE === toString('2020-03')"}
        ],
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

      "transform": [
          {"filter": "datum.DATE === toString('2020-03')"}
      ],
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
  "config": {"view": {"step": 12}}
};

var vlSpec3 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "vconcat": [
    {
      "layer": [{
        "transform": [
          {"filter": "datum.DATE === toString('2020-04')"}
        ],
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

      "transform": [
          {"filter": "datum.DATE === toString('2020-04')"}
      ],
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
  "config": {"view": {"step": 12}}
};


vegaEmbed('#randy1', vlSpec1);
vegaEmbed('#randy2', vlSpec2);
vegaEmbed('#randy3', vlSpec3);



