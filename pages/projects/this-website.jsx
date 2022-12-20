import React from 'react'
import Project from '../../components/aboutMe/Project'

const Tools = [
    {
        name: 'ChakraUi',
        detail: 'Used Chakra Ui for designing frontEnd.'
    }, {
        name: 'aws amplify',
        detail: `I used AWS Amplify for deploying this Portfolio.`
    },

]

const projectName = 'this website'
const projectDetail = `It's my new portfolio Website built using NextJs and used ChakraUi. Built this to know NextJs and ChakraUI.
`

export default function ThisWebsite() {
    return <Project tools={Tools} projectName={projectName} projectDetail={projectDetail} />
}
