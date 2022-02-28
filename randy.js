var vlSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"},
  "vconcat": [
    {
      "layer": [{
        "transform": [
          {"filter": "datum.DATE === toString('2019-01')"}
        ],
        "title": "Monthly Traveler Mobility Between States",
        "mark": "rect",
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
          "opacity": {
            "condition": {"param": "pts", "value": 1},
            "value": 0.2
          }
        }
      }]
    }, {

      "transform": [
          {"filter": "datum.DATE === toString('2019-01')"}
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


vegaEmbed('#randy', vlSpec);