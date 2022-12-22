import React from 'react'
import Project from '../../components/aboutMe/Project'


const Tools = [

    {
        name: ' Django'
        , detail: `Django for backend.`
    }
]

const projectName = 'contacts book'
const projectDetail = `It's a contacts book app, built using react, ChakraUi, and django.
`

export default function ContactsBook() {
    return <Project tools={Tools} projectName={projectName} projectDetail={projectDetail} />
}
