import Project from '../../components/aboutMe/Project'


const Tools = [
    {
        name: 'Bulma CSS framework',
        detail: 'I used the Bulma CSS framework to beautify the frontend. Although, my website does not look so appealing.'
    }, {
        name: ' AWS EC2 Instance',
        detail: 'I used Amazon EC2 Instance for deploying the e-learning website, Redis, and Memcached server on the same instance.'
    },

    {
        name: ' Django Channels and Redis Server'
        , detail: `I used Channels for real - time communication between the Client and the Server.For Django Channels' storage layer, I used Redis.`
    },
    {
        name: 'AWS S3 Bucket',
        detail: `I used S3 Sucket for user uploading files and also for serving static files.`
    },
    {
        name: 'Memcached Server',
        detail: `I used the Memcached backend for caching course content.`
    },
]

const projectDetail = `This simple E-learning Django website has a content management system (CMS). Where students can enroll, and Teachers can serve content through the website . Students can also chat in enrolled course rooms. This website is running on Amazon Elastic Compute Cloud (Amazon EC2). look into the source code.`

const projectName = `E-learning Website`

export default function ELearningWebsite() {
    return <Project tools={Tools} projectName={projectName} projectDetail={projectDetail} />
}
