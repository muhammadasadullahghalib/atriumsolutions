import { Lock } from "lucide-react";
import "./Benefits.css"
import ElectricBorder from './ElectricBorder.jsx'
function Benefits() {
  return (
    <div className="benefits-wrapper">

    
     <div className="m-auto">
      
       <div className="top-cards">
        
        <div className="benefit-card">
          
        <div>
            <h4>Graphics Designer</h4>
          <p>Designers with style</p>
          </div>
           <button to="/contact" className="contact-ben-btn mt-4">
                        Apply Now
                      </button>
        </div>
        <div className="benefit-card">
          <div>
          <h4>Video Editor</h4>
          <p>Editors with rhythm</p>
          </div>
           <button to="/contact" className="contact-ben-btn mt-4">
              Apply Now
            </button>
        </div>
       
      </div>
      <div className="top-cards snd">
        <div className="benefit-card">
          <div>
          <h4>Sales Excutive</h4>
          <p>Sales with communication</p>
          </div>
           <button to="/contact" className="contact-ben-btn mt-4">
              Apply Now
            </button>
        </div>
        <div className="benefit-card">
          <div>
          <h4>Chat Support </h4>
          <p>Support heroes</p>
          </div>
           <button to="/contact" className="contact-ben-btn mt-4">
              Apply Now
            </button>
        </div>
        <div className="benefit-card">
          <div>
          <h4>Content Creater</h4>
          <p>Content with storytellers</p>
          </div>
           <button to="/contact" className="contact-ben-btn mt-4">
              Apply Now
            </button>
        </div>
      </div>

    
      <div className="blurred-cards">
        {[1,2,3,4].map((_, i) => (
          <div className="benefit-card locked" key={i}>
            
          
            <div className="card-content">
              <div>
              <h4>Locked Jobs</h4>
              <p>This job is locked</p>
              </div>
               <button to="/contact" className="contact-ben-btn mt-4">
              Apply Now
            </button>
            </div>

          
            <div className="lock-icon">
              <Lock size={28} />
            </div>

          </div>
        ))}
      </div>
     </div>

    </div>
  );
}

export default Benefits;
