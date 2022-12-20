import React from 'react'
import Project from '../../components/aboutMe/Project'


const Tools = [

  {
    name: ' Django for  Serve Json'
    , detail: `I used Channels for real - time communication between the Client and the Server.For Django Channels' storage layer, I used Redis.`
  }
]

const projectName = 'FakeJson App'
const projectDetail = `It's django app that serve fake data in json. 
`

export default function ApiFakejson() {
  return <Project tools={Tools} projectName={projectName} projectDetail={projectDetail} />
}
