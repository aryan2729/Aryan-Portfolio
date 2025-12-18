import ScrollVelocity from "components/ScrollVelocity";
  



export default function Skills() {
    return (
      <div>
      
        <ScrollVelocity
        
        texts={[
          'TypeScript • JavaScript • SQL ',
          'React • Next.js • Node.js • Tailwind • GSAP • 3D Web',
          'APIs • JWT • WebSockets • Stripe • MongoDB • PostgreSQL'
        ]}
          
        
        velocity={30} 
        
        className="custom-scroll-text space-y-6 md:space-y-8 " />

      </div>
      
    );
  }
  