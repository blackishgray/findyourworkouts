export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${process.env.REACT_APP_X_RapidAPI_Key}`,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const bodyParts = [
  "abductors",
  "abs",
  "adductors",
  "biceps",
  "calves",
  "cardiovascular system",
  "delts",
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "levator scapulae",
  "pectorals",
  "quads",
  "serratus anterior",
  "spine",
  "traps",
  "triceps",
  "upper back",
]


export const equipmentsList = [
  "assisted"
 ,"band"
 ,"barbell"
 ,"body weight"
 ,"bosu ball"
 ,"cable"
 ,"dumbbell"
 ,"elliptical machine",
 "ez barbell"
 ,"hammer"
 ,"kettlebell"
 ,"leverage machine"
 ,"medicine ball" ,"olympic barbell"
 ,"resistance band"
 ,"roller"
 ,"rope"
 ,"skierg machine"
 ,"sled machine"
 ,"smith machine"
 ,"stability ball"
 ,"stationary bike"
 ,"stepmill machine"
 ,"tire"
 ,"trap bar"
 ,"upper body ergometer"
 ,"weighted"
 ,"wheel roller"
]
