import { useEffect, useState } from "react";


const Bloges = () => {
    const [bloges, setBloges] = useState([])

    useEffect(() =>{
        fetch('bloge.json')
        .then(res=> res.json())
        .then(data => setBloges(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl ">Blogs:{bloges.length}</h1>
        </div>
    );
};

export default Bloges;