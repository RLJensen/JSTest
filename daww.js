var item = {
  "_items": [{
      "_id": "player_1",
      "score": {
        "a": -4.74,
        "b": 0.71,
        "c": -4.04,
        "d": 3.37,
        "e": 0.22,
        "f": 1.09,
        "g": -2.17
      }
    },
    {
      "_id": "player_2",
      "score": {
        "a": -4.74,
        "b": 0.71,
        "c": -4.04,
        "d": 3.37,
        "e": 0.22,
        "f": 1.09,
        "g": -2.17
      }
    }
  ]
};
let arrayScores = item._items.map(el => el.score);
console.log(arrayScores);