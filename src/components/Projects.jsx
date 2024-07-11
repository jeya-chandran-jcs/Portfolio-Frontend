// import React from 'react'
// import { Container, Row, Col,Card } from 'react-bootstrap'
// import Aos from 'aos';


// const data=[
//     [
        
//             {
//                 name:"Inventory Billing App",
//                 link:"https://fascinating-jalebi-1e7bb9.netlify.app/",
//                 img:"./images/ibapp.png",
//                 technologies:["ReactJS","NodeJS","ExpressJS","MongoDB"],
//             },
//             {
//                 name:"Car Care Plus Services",
//                 link:"https://car-care-plus.netlify.app/",
//                 img:"./images/carcare.png",
//                 technologies:["ReactJS","NodeJS","ExpressJS","MongoDB"],
//             },
//             {
//                 name:"Quick Bite Food-App",
//                 link:"https://quick-bite-1.netlify.app/",
//                 img:"./images/quickbite.png",
//                 technologies:["ReactJS","NodeJS","ExpressJS","MongoDB"],
//             },
//             {
//                 name:"Zen Dashboard",
//                 link:"https://illustrious-daffodil-070aa1.netlify.app/",
//                 img:"./images/zendash.png",
//                 technologies:["ReactJS","NodeJS","ExpressJS","MongoDB"],
//             }
//     ]
//         [
//             {
//                 name:"Banner design",
//                 link:"https://silly-heliotrope-6df90a.netlify.app/",
//                 img:"./images/banner.png",
//                 technologies:["Html5","Css3"]
//             },{
//                 name:"Web Screen Shot",
//                 link:"https://fabulous-douhua-d6ad7b.netlify.app/",
//                 img:"./images/js_web.png",
//                 technologies:["Html5","Css3","Javascript"]
//             },{
//                 name:"Todo app",
//                 link:"https://aquamarine-chebakia-90f985.netlify.app/",
//                 img:"./images/todo.png",
//                 technologies:["Html5","Css3","Javascript"]   
//             },{
//                 name:"Library management system",
//                 link:"https://wondrous-semifreddo-999b99.netlify.app/",
//                 img:"./images/library.png",
//                 technologies:["Html5","Css3","Javascript","ReactJs"]  
//             }
        
//     ]
// ]

// export default function Projects() {
//   return (
//     <Container>
//         <h2 className='text-center mx-5 fs-1 fw-bolder text-primary text-decoration-underline mb-5'
//         data-aos="fade-up">Projects-MERN</h2>
//         <Row>
//            {data.map((item,index)=>(
//             <Col xs={4} md={4} lg={6} key={index}>
//                 <Card className="bg-light border-primary rounded w-100" data-aos="fade-up">
//                     <Card.Img variant="top" src={item.img} alt={item.name} className='img-fluid' />
//                     <Card.Body>
//                         <Card.Title>{item.name}</Card.Title>
//                         <Card.Link href={item.link} target="_blank" className="text-primary">Live Project &gt;&gt;</Card.Link>
//                     </Card.Body>
//                     <Card.Footer>
//                         <Card.Text className="bg-info text-light p-1 rounded ">{item.technologies}</Card.Text>
//                     </Card.Footer>
//                 </Card>
//             </Col>
//         ))}
//         </Row>
//     </Container>
//   )
// }
import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Aos from 'aos';
import './Projects.css';

Aos.init();

const data = [
    
        {
            name: "Inventory Billing App",
            link: "https://fascinating-jalebi-1e7bb9.netlify.app/",
            img: "./images/ibapp.png",
            technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"]
        },
        {
            name: "Car Care Plus Services",
            link: "https://car-care-plus.netlify.app/",
            img: "./images/carcare.png",
            technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"]
        },
        {
            name: "Quick Bite Food-App",
            link: "https://quick-bite-1.netlify.app/",
            img: "./images/quickbite.png",
            technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"]
        },
        {
            name: "Zen Dashboard",
            link: "https://illustrious-daffodil-070aa1.netlify.app/",
            img: "./images/zendash.png",
            technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"]
        }
    ]

export default function Projects() {
  return (
    <Container className="my-5">
        <h2 className='text-center mx-5 fs-1 fw-bolder text-primary text-decoration-underline mb-5'
        data-aos="fade-down">Projects</h2>
        <Row>
            {data.map((project, index) => (
                <Col xs={6} md={3}  key={index} className="mb-4">
                    <Card className="bg-light border-dark shadow" data-aos="fade-up">
                        <Card.Img variant="top" src={project.img} alt={project.name} />
                        <hr/>
                        <Card.Body className="">
                            <Card.Title className='lead fw-bolder '>{project.name}</Card.Title>
                            <Card.Text className="bg-light">
                                 {project.technologies.join(', ')}
                            </Card.Text>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                View Project &gt;&gt;
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        
    </Container>
  )
}
