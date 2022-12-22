import Project from '../../components/aboutMe/Project'


const Tools = [

    {
        name: ' Django for  Serving JSON'
        , detail: `I used Django for the web server. Django serves all apps using single projects. It deployed on python anywhere.`
    }
]

const projectName = `Tiny Django Apps`
const projectDetail = `It's a collection of Django apps such as Todo, todo API, Movie Review App, And More. 
`

export default function TinyAppsDjango() {
    return <Project tools={Tools} projectName={projectName} projectDetail={projectDetail} />
}
