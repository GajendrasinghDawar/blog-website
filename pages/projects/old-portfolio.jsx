import React from 'react'
import Project from '../../components/aboutMe/Project'

const Tools = [
    {
        name: 'Django',
        detail: 'I used Django in this project for serving blogs (notes to self) from the backend. However, it still needs some polish. Django is running on PythonAnywhere.com.'
    }, {
        name: 'aws amplify',
        detail: `I used AWS Amplify for deploying this Portfolio's frontend.`
    },

]

const projectName = 'old Portfolio '
const projectDetail = `It's my old react portfolio Website.
`

export default function OldPortfolio() {
    return <Project tools={Tools} projectName={projectName} projectDetail={projectDetail} />
}
