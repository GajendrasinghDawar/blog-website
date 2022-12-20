import Project from '../../components/aboutMe/Project'


const Tools = [

    {
        name: ' Django for  Serve Json'
        , detail: `I used Channels for real - time communication between the Client and the Server.For Django Channels' storage layer, I used Redis.`
    }
]

const projectName = `Tiny Django Apps`
const projectDetail = `It's collection of  Django apps such as Todo,todo API,Movie Review App,And More. 
`

export default function TinyAppsDjango() {
    return <Project tools={Tools} projectName={projectName} projectDetail={projectDetail} />
}
