class Date {

  constructor(description, id, lat, place, readonly, state, value) {
    this.description = description
    this.id = id
    this.lat = lat
    this.place = place
    this.readonly = readonly
    this.state = state
    this.value = value
  }

function JSONToData(jsonObject) {
  this.description = description
    this.id = id
    this.lat = lat
    this.place = place
    this.readonly = readonly
    this.state = state
    this.value = value
    
  const {strDescription: description, 
    strId: id,
    strLat: lat,
    strPlace: place,
    strReadonly: readonly,
    strState = state,
    strValue = value
  } = jsonObject // destructuring

  const data = new Date(description,id,lat,place,readonly,state,value)

  if (strTags) {
    const tags = strTags.split(;)
    for(const tag of tags){
      date.AddTag(tag)
    }
  }
  
  console.log(date)
  return date
}
