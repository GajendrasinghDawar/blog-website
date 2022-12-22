import React from 'react'
import Project from '../../components/aboutMe/Project'

const Tools = [
    {
        name: 'ChakraUI',
        detail: 'to quickly build UI.'
    }, {
        name: 'AWS amplify',
        detail: `I used this for deploying.`
    },
    {
        name: 'NextJs',
        detail: 'SSR for React.',
    }
]

const projectName = 'this website'
const projectDetail = `It's my new portfolio Website built using NextJs and used ChakraUi. Built this to know NextJs and ChakraUI.
`

export default function ThisWebsite() {
    return <Project tools={Tools} projectName={projectName} projectDetail={projectDetail} />
}
