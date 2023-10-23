import aboutImage from '../../../assets/images/About/about-img.png'

const About = () => {
    return (
        <div className="my-24 text-center">
        <div className="hero">
          <div className="hero-content justify-between flex-col sm:w-full lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl font-bold text-red-700 w-1/2">
                A B O U T 
              </h1>
              <h2 className="text-xl  font-bold mt-5">
              We Provide Best Broadband & Internet Service Provider
              </h2>
              <p className="text-gray-600 mt-6">
              
              </p>
              <p className="text-gray-600">
              Thousands Channels Worldwide.
Best IPTV Solution with the best price- watch on favourite Movies & TV <br/> shows into Full HD.Catch the biggest games and PPV events. Grab a big bowl <br/> of popcorn. Using a VPN while watching TV is fully allowed.
              </p>
              <div className="flex gap-10 mt-6 justify-center lg:justify-start">
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold">
                    30<span className="text-red-700">+</span>
                  </h2>
                  <small className="text-gray-600">Year of Experience</small>
                </div>
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold text-center">
                    8<span className="text-red-700">M</span>
                  </h2>
                  <small className="text-gray-600">Active User</small>
                </div>
  
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold">
                    500<span className="text-red-700 font-extrabold">+</span>
                  </h2>
                  <small className="text-gray-600">Team Members</small>
                </div>
              </div>
            </div>
            <div className="card relative sm:w-1/2 h-full">
              <div className="card-body">
                <img
                  src={aboutImage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;