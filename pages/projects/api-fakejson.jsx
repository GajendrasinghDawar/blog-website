import React from 'react'
import Project from '../../components/aboutMe/Project'
import { Link } from '@chakra-ui/react'
import { default as NextLink } from "next/link"
import { ExternalLinkIcon } from '@chakra-ui/icons'


const Tools = [

  {
    name: ' Django '
    , detail: `Django for  Serving Json.
   `
  },
  {
    name: ' Postgresql '
    , detail: `for data storage.
   `
  }, {
    name: 'AWS ec2 instance',
    detail: 'for deploying.'
  }
]

const projectName = 'FakeJson App'
const projectDetail = `It's django app that serve fake data in json.
see live
 (base url:https://api.fakejson.tk/)
  
`

export default function ApiFakejson() {
  return <Project tools={Tools} projectName={projectName} projectDetail={projectDetail} />
}
