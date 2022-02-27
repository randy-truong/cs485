var vlSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "https://raw.githubusercontent.com/randy-truong/cs485/main/assets/data/origin_state_sum.csv"
    },
  "transform": [
    {"filter": {"field": "DATE", "equal": "2019-01"}}
  ],
  "params": [{"name": "highlight", "select": "point"}],
  "mark": {"type": "rect", "strokeWidth": 2},
  "encoding": {
    "y": {
      "field": "ORIGIN_STATE_NM",
      "type": "nominal"
    },
    "x": {
      "field": "DEST_STATE_NM",
      "type": "nominal"
    },
    "fill": {
      "field": "PASSENGERS",
      "type": "quantitative"
    },
    "stroke": {
      "condition": {
        "param": "highlight",
        "empty": false,
        "value": "black"
      },
      "value": null
    },
    "opacity": {
      "condition": {"param": "highlight", "value": 1},
      "value": 0.5
    },
    "order": {"condition": {"param": "highlight", "value": 1}, "value": 0}
  },
  "config": {
    "scale": {
      "bandPaddingInner": 0,
      "bandPaddingOuter": 0
    },
    "view": {"step": 40},
    "range": {
      "ramp": {
        "scheme": "yellowgreenblue"
      }
    },
    "axis": {
      "domain": false
    }
  }
};

vegaEmbed('#randy', vlSpec);