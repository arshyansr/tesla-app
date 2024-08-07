import Home from "../home1/home";
import '../home1/home.css';

function HomePage() {
    let articles = [
        {
            id: 1,
            imageUrl: "/images/model-3.jpg",
            title: "Model 3",
            line1: "Custom order",
            line2: "Existing inventory"

        },
        {
            id: 2,
            imageUrl: "/images/model-s.jpg",
            title: "Model s",
            line1: "Custom order",
            line2: "Existing inventory"
        },
        {
            id: 3,
            imageUrl: "/images/model-x.jpg",
            title: "Model X",      
            line1: "Custom order",
            line2: "Existing inventory"
        },
        {
            id: 4,
            imageUrl: "/images/model-y.jpg",
            title: "Model Y",     
            line1: "Custom order",
            line2: "Existing inventory"
        },
        {
            id: 5,
            imageUrl: "/images/solar-panel.jpg",
            title: "Solar Panel",    
            line1: "Order now",
            line2: "Learn More"
        },
        {
            id: 6,
            imageUrl: "/images/solar-roof.jpg",
            title: "Solar Roof",
            line1: "Order now",
            line2: "Learn More"
        }, 
        {
            id: 7,
            imageUrl: "/images/accessories.jpg",
            title: "Accessories",
            line1: "Shop Now",
          
        },
    ];

    return (
        <div className="App">
            {articles.map(({id, imageUrl, title, line1, line2}) => (
                <Home key={id} title={title} imageUrl={imageUrl} id={id} line1={line1} line2={line2} />
            ))}  
        </div>
    );
}

export default HomePage