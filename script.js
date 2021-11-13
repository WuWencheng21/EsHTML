const debug = document.getElementById("debug")
const status = document.getElementById("value")

//function setVisible(domId, visible) {
  //let value = "none"
  //if(visible === true) {
 //   value = "block"
 // }
 // document.getElementById(domId).style.display= value
//}

//function setContent(domId,content) {
//  document.getElementById(domId).innerHTML = content 
//}

fetch("https://python-iot-sim.professorandrea.repl.co")
//https://python-iot-sim.professorandrea.repl.co
//fetch("https://hf3xzw.deta.dev/")
  .then(r => r.json()) 
  .then(body => {
    console.log(body)
    let value = ""
    let read = ""
    for(i = 0; i < body.sensors.length ;i++){
      read= JSON.stringify(body.sensors[i].readonly,null,2)
      if(let == "true"){
        value = value + JSON.stringify(body.sensors[i].value,null,2) + "<br>" 
      }
    }
    document.getElementById("debug").innerHTML = JSON.stringify(body,null,2)
    document.getElementById("value").innerHTML = value
        })

const btnComplimento = document.getElementById("btnAggiorna")
btnComplimento.onclick = () => {
  fetch("https://python-iot-sim.professorandrea.repl.co")
  .then(r => r.json())
  .then(body => {
    console.log(body)
    let read = ""
    for(i = 0; i < body.sensors.length ;i++){
      read = JSON.stringify(body.sensors[i].readonly,null,2)
      if(let == "true"){
        value = value + JSON.stringify(body.sensors[i].value,null,2) + "<br>" 
      }
    }
    document.getElementById("debug").innerHTML = JSON.stringify(body,null,2)
    document.getElementById("value").innerHTML = value
        })
}
//let status = ""
  //  for(i = 0; i < body.sensors.length ;i++){
    //  status = status + JSON.stringify(body.sensors[i].state_code,null,2) + "<br>" 
    //}
//document.getElementById("status").innerHTML = status
//document.getElementById("description").innerHTML = JSON.stringify(body,null,any)