// import { useState, useEffect } from 'react';
// import axios from 'axios';

const AlumniAssociation : React.FC = () => {
    // const [members, setMembers] = useState([]);

    // useEffect(() => {
    //     // Fetch data from the backend
    //     axios.get('/api/alumni')
    //         .then(response => {
    //             setMembers(response.data);
    //         })
    //         .catch(error => {
    //             console.error('There was an error fetching the alumni data!', error);
    //         });
    // }, []);

    const members =[
        {
            "id": 1,
            "name": "Dr. Mohammad Sohrab Uddin",
            "title": "President",
            "image": "https://picsum.photos/201"
        },
        {
            "id": 2,
            "name": "Professor M. A. Razzaque",
            "title": "Senior Vice President",
            "image": "https://picsum.photos/202"
        },
        {
            "id": 3,
            "name": "Niamat Ali Khokon",
            "title": "Vice President",
            "image": "https://picsum.photos/203"
        },
        {
            "id": 4,
            "name": "Prof. Dr. M. Sayedur Rahman",
            "title": "Vice President",
            "image": "https://picsum.photos/204"
        },
        {
            "id": 5,
            "name": "Silvi Yasmin",
            "title": "Vice President",
            "image": "https://picsum.photos/205"
        },
        {
            "id": 6,
            "name": "Mohammed Ayub Ali Khan",
            "title": "General Secretary",
            "image": "https://picsum.photos/206"
        },
        {
            "id": 7,
            "name": "Uttam Kumar Saha",
            "title": "Joint Secretary",
            "image": "https://picsum.photos/207"
        },
        {
            "id": 8,
            "name": "Syed Apon Ahsan",
            "title": "Joint Secretary",
            "image": "https://picsum.photos/208"
        },
        {
            "id": 9,
            "name": "Md. Abul Kalam Azad",
            "title": "Treasurer",
            "image": "https://picsum.photos/21  9"
        },
        {
            "id": 10,
            "name": "Md. Benjir Ahmed",
            "title": "Organizing Secretary",
            "image": "https://picsum.photos/210"
        }
    ]
    

    return (
        <div className="container mx-auto px-4 py-8 font-serif">
            <h1 className="text-5xl font-bold text-center mb-2 ">Executive Committee </h1>
            <h1 className="text-2xl font-bold text-center mb-16 ">ICE Alumni Association </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {members.map(member => (
                    <div key={member.id} className="text-center">
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <div className="font-bold text-lg">{member.name}</div>
                        <div className="text-gray-600">{member.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlumniAssociation;
