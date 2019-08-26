import React from 'react';

class Home extends React.Component {
  static async getInitialProps({}) {
    return {};
  }
  render() {
    return (
      <>
        {/* <!-- Banner --> */}
        <section id="banner">
          <div className="inner">
            <h1>Industrious</h1>
            <p>
              A responsive business oriented template with a video background
              <br />
              designed by <a href="https://templated.co/">TEMPLATED</a> and
              released under the Creative Commons License.
            </p>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            src="../styles/images/banner.mp4"
          />
        </section>

        {/* <!-- Highlights --> */}
        <section className="wrapper">
          <div className="inner">
            <header className="special">
              <h2>Sem turpis amet semper</h2>
              <p>
                In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim
                aliquet. Accumsan ac integer lobortis commodo ornare aliquet
                accumsan erat tempus amet porttitor.
              </p>
            </header>
            <div className="highlights">
              <section>
                <div className="content">
                  <header>
                    <a href="#" className="icon fa-vcard-o">
                      <span className="label">Icon</span>
                    </a>
                    <h3>Feugiat consequat</h3>
                  </header>
                  <p>
                    Nunc lacinia ante nunc ac lobortis ipsum. Interdum
                    adipiscing gravida odio porttitor sem non mi integer non
                    faucibus.
                  </p>
                </div>
              </section>
              <section>
                <div className="content">
                  <header>
                    <a href="#" className="icon fa-files-o">
                      <span className="label">Icon</span>
                    </a>
                    <h3>Ante sem integer</h3>
                  </header>
                  <p>
                    Nunc lacinia ante nunc ac lobortis ipsum. Interdum
                    adipiscing gravida odio porttitor sem non mi integer non
                    faucibus.
                  </p>
                </div>
              </section>
              <section>
                <div className="content">
                  <header>
                    <a href="#" className="icon fa-floppy-o">
                      <span className="label">Icon</span>
                    </a>
                    <h3>Ipsum consequat</h3>
                  </header>
                  <p>
                    Nunc lacinia ante nunc ac lobortis ipsum. Interdum
                    adipiscing gravida odio porttitor sem non mi integer non
                    faucibus.
                  </p>
                </div>
              </section>
              <section>
                <div className="content">
                  <header>
                    <a href="#" className="icon fa-line-chart">
                      <span className="label">Icon</span>
                    </a>
                    <h3>Interdum gravida</h3>
                  </header>
                  <p>
                    Nunc lacinia ante nunc ac lobortis ipsum. Interdum
                    adipiscing gravida odio porttitor sem non mi integer non
                    faucibus.
                  </p>
                </div>
              </section>
              <section>
                <div className="content">
                  <header>
                    <a href="#" className="icon fa-paper-plane-o">
                      <span className="label">Icon</span>
                    </a>
                    <h3>Faucibus consequat</h3>
                  </header>
                  <p>
                    Nunc lacinia ante nunc ac lobortis ipsum. Interdum
                    adipiscing gravida odio porttitor sem non mi integer non
                    faucibus.
                  </p>
                </div>
              </section>
              <section>
                <div className="content">
                  <header>
                    <a href="#" className="icon fa-qrcode">
                      <span className="label">Icon</span>
                    </a>
                    <h3>Accumsan viverra</h3>
                  </header>
                  <p>
                    Nunc lacinia ante nunc ac lobortis ipsum. Interdum
                    adipiscing gravida odio porttitor sem non mi integer non
                    faucibus.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* <!-- CTA --> */}
        <section id="cta" className="wrapper">
          <div className="inner">
            <h2>Curabitur ullamcorper ultricies</h2>
            <p>
              Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
              odio porttitor sem non mi integer non faucibus ornare mi ut ante
              amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
              accumsan varius montes viverra nibh in adipiscing. Lorem ipsum
              dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit
              adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu
              faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac
              gravida.
            </p>
          </div>
        </section>

        {/* <!-- Testimonials --> */}
        <section className="wrapper">
          <div className="inner">
            <header className="special">
              <h2>Faucibus consequat lorem</h2>
              <p>
                In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim
                aliquet. Accumsan ac integer lobortis commodo ornare aliquet
                accumsan erat tempus amet porttitor.
              </p>
            </header>
            <div className="testimonials">
              <section>
                <div className="content">
                  <blockquote>
                    <p>
                      Nunc lacinia ante nunc ac lobortis ipsum. Interdum
                      adipiscing gravida odio porttitor sem non mi integer non
                      faucibus.
                    </p>
                  </blockquote>
                  <div className="author">
                    <div className="image">
                      <img src="../styles/images/pic01.jpg" alt="" />
                    </div>
                    <p className="credit">
                      - <strong>Jane Doe</strong> <span>CEO - ABC Inc.</span>
                    </p>
                  </div>
                </div>
              </section>
              <section>
                <div className="content">
                  <blockquote>
                    <p>
                      Nunc lacinia ante nunc ac lobortis ipsum. Interdum
                      adipiscing gravida odio porttitor sem non mi integer non
                      faucibus.
                    </p>
                  </blockquote>
                  <div className="author">
                    <div className="image">
                      <img src="images/pic03.jpg" alt="" />
                    </div>
                    <p className="credit">
                      - <strong>John Doe</strong> <span>CEO - ABC Inc.</span>
                    </p>
                  </div>
                </div>
              </section>
              <section>
                <div className="content">
                  <blockquote>
                    <p>
                      Nunc lacinia ante nunc ac lobortis ipsum. Interdum
                      adipiscing gravida odio porttitor sem non mi integer non
                      faucibus.
                    </p>
                  </blockquote>
                  <div className="author">
                    <div className="image">
                      <img src="images/pic02.jpg" alt="" />
                    </div>
                    <p className="credit">
                      - <strong>Janet Smith</strong> <span>CEO - ABC Inc.</span>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
