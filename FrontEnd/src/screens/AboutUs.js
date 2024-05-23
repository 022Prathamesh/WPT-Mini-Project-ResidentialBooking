import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AboutUs(){
    return(
        <>
         <div>
        <Navbar />
      </div>
      <div class="container mt-3">
        <div class="main-content">
            <div className="card">
                <div className="card-body">
                <div className="card-title">
                 <h1 className="text-center">About Us</h1>
                </div>
                <p>Welcome to HouseHunt, your number one source for finding your dream home. We're dedicated to giving you the very best listings, with a focus on dependability, customer service, and uniqueness.</p>
                <p>Founded in 2024, HouseHunt has come a long way from its beginnings. When we first started out, our passion for making the home-buying process easier drove us to do tons of research, so that HouseHunt can offer you the best home listings and an easy way to schedule visits. We now serve customers all over the country and are thrilled to be a part of the eco-friendly wing of the real estate industry.</p>
                <p>We hope you enjoy our listings as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                <p>Sincerely,<br/>The HouseHunt Team</p>
                </div>
               <Footer/>
            </div>                       
        </div>
    </div>
        </>
    )
}

export default AboutUs