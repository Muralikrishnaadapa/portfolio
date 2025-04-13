import Data from "@data/sections/services.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import Pentagon from "@layouts/pentagon/Index";

const ServicesSection = () => {
  return (
    <>
      {/* services */}
      <section className="mil-dark-bg">
        <div className="mi-invert-fix">
          {/* <div className="mil-animation-frame">
                    <div className="mil-animation mil-position-1 mil-scale" data-value-1="2.4" data-value-2="1.4" style={{"top": "300px", "right": "-100px"}}>
                        <Pentagon />
                    </div>
                    <div className="mil-animation mil-position-2 mil-scale" data-value-1="2" data-value-2="1" style={{"left": "150px"}}>
                        <Pentagon />
                    </div>
                </div> */}

          <div className="container mil-p-40 ">
            <div className="mil-p-40 ">
              <div className="row mil-up ">
                {Data.images.map((item, key) => (
                  <div
                    key={key}
                    className="col-4 col-sm-6 col-md-4 col-lg-3 col-xl-2 mil-tool"
                    style={{ opacity: 0 }}
                  >
                    <div key={key} className="mil-tool-frame mil-mb-10 ">
                      <img
                        src={item?.url}
                        className="mil-scale"
                        data-value-1="1"
                        data-value-2="1.2"
                      />
                    </div>
                    <h6
                      className="mil-h5 mil-tool-title mil-thin "
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="container mil-p-120-0 ">
                        <div>
                        <img src={Data.images.url} alt={Data.images.alt} className="mil-scale" data-value-1="1" data-value-2="1.2" />

                        </div>
                    <div className="mil-mb-120 mil-border ">
                        <div className="row">
                            <div className="col-lg-10">
                                <span className="mil-suptitle mil-light-soft mil-suptitle-right mil-up" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                            </div>
                        </div>

                        <div className="mil">

                        </div>

                        <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
                            <span className="mil-text-image"><img src="img/photo/2.jpg" alt="team" /></span>
                            <h2 className="mil-h1 mil-muted mil-center" dangerouslySetInnerHTML={{__html : Data.title1}} />
                        </div>

                        <div className="mil-complex-text justify-content-center mil-up">
                            <h2 className="mil-h1 mil-muted mil-center" dangerouslySetInnerHTML={{__html : Data.title2}} />
                            <Link href={Data.button.link} className="mil-services-button mil-button mil-arrow-place">
                                <span>{Data.button.label}</span>
                                <ArrowIcon />
                            </Link>
                        </div>
                    </div>

                    <div className="row mil-services-grid m-0">
                        {Data.items.map((item, key) => (
                        <div key={`services-item-${key}`} className="col-md-6 col-lg-3 mil-services-grid-item p-0">

                            <Link href={item.link} className="mil-service-card-sm mil-up">
                                <h5 className="mil-muted mil-mb-30" dangerouslySetInnerHTML={{__html : item.title}} />
                                <p className="mil-light-soft mil-mb-30">{item.text}</p>
                                <div className="mil-button mil-icon-button-sm mil-arrow-place">
                                    <ArrowIcon />
                                </div>
                            </Link>

                        </div>
                        ))}
                    </div>
                </div> */}
        </div>
      </section>
      {/* services end */}
    </>
  );
};

export default ServicesSection;
