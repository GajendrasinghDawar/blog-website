import React from 'react'
import Project from '../../components/aboutMe/Project'


const Tools = [

    {
        name: ' Django for  Server'
        , detail: `I used Channels for real - time communication between the Client and the Server.For Django Channels' storage layer, I used Redis.`
    }
]

const projectName = 'contacts book'
const projectDetail = `It's contacts book app in react and django.
`

export default function ContactsBook() {
    return <Project tools={Tools} projectName={projectName} projectDetail={projectDetail} />
}
