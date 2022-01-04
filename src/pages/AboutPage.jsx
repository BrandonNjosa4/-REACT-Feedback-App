import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
    return (
        <Card>
            <div className='about'>
                <h1>About this Project</h1>
                <p>React app to leave feedback for a product or server</p>
                <p>Verson: 1.0.0</p>
                <p>
                    <Link to="/">Back To Home</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage
