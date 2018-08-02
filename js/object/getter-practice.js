let colKeys = ['date', 'time', 'title', 'vip', 'level', 'teacher', 'location', 'ifDiscover', 'intro', 'imgUrl', 'detail']
let objsArray = [{
    attributes: {
        date: "Sat Aug 11",
        detail: "view",
        endTime: new Date(2018,7,11,18),
        ifDiscover: true,
        imgUrl: "",
        intro: "",
        isVIP: false,
        level: "Unlimited",
        location: "Center",
        startTime: new Date(2018,7,11,16),
        teacher: "FT",
        time: "16:00 - 18:00",
        title: "Watermelon Party",
        vip: "No"
    },
    id: "abcdefg"
}]

function backendToTable (objsArray) {
    return objsArray.map(item => {
      let backObj = item.attributes
      let tableObj = {
        id: item.id
      }
      let index = 1
      colKeys.forEach((key) => {
        tableObj[`_${key}`] = {
          text: backObj[key],
          index: index
        }
        Object.defineProperty(tableObj, `_${key}`, {
          enumerable: false
        })
        Object.defineProperty(tableObj, key, {
          get () { // for-in 直接拿到的值
            return this[`_${key}`].text
          },
          set (value) {
            this[`_${key}`].text = value
          },
          enumerable: (key !== 'ifDiscover') && (key !== 'intro') && (key !== 'imgUrl') && (key !== 'detail')
        })
        index++
      })
      console.log(tableObj)
      return tableObj
    })
  }

let arr = backendToTable(objsArray)
for (let obj of arr) {
    for (let key in obj) {
       console.log(key + ': ' + obj[key])
    }
}