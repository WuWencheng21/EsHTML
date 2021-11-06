const debug = document.getElementById("debug")
const status = document.getElementById("status")

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
    let status = ""
    for(i = 0; i < body.sensors.length ;i++){
      status = status + JSON.stringify(body.sensors[i].state_code,null,2) + "<br>" 
    }
    document.getElementById("debug").innerHTML = JSON.stringify(body,null,2)
    document.getElementById("status").innerHTML = status
        })

//let status = ""
  //  for(i = 0; i < body.sensors.length ;i++){
    //  status = status + JSON.stringify(body.sensors[i].state_code,null,2) + "<br>" 
    //}
//document.getElementById("status").innerHTML = status
//document.getElementById("description").innerHTML = JSON.stringify(body,null,any)
  

  