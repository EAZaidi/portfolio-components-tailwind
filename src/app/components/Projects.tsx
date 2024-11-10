import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        name: 'Facebook Login Page Clone',
        description: 'A facebook login page clone using Next.js and Tailwind CSS.',
        img: '/facebook.jpg',
        tags: ['Next.js', 'HTML', 'Node', 'Tailwind CSS'],

    },
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.name}
            desc={el.description}
            img={el.img}
            tags={el.tags}
            
            />))}
        </div>
    </div>
  )
}

export default Projects