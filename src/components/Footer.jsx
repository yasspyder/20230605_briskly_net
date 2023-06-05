function Footer() {
  return (
    <div>
      <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5">
        <div className="row pt-5">
          <div className="col-lg-7 col-md-12">
            <div className="row">
              <div className="col-md-6 mb-5">
                <h5
                  className="text-primary text-uppercase mb-4"
                  style={{ letterSpacing: '5px' }}
                >
                  Связаться с нами
                </h5>
                <p>
                  <i className="fa fa-map-marker-alt mr-2"></i>Ул.Неизвестно,
                  12, Город, Страна
                </p>
                <p>
                  <i className="fa fa-phone-alt mr-2"></i>+012 345 6789
                </p>
                <p>
                  <i className="fa fa-envelope mr-2"></i>info@example.com
                </p>
                <div className="d-flex justify-content-start mt-4">
                  <div className="btn btn-outline-light btn-square mr-2">
                    <i className="fab fa-twitter"></i>
                  </div>
                  <div className="btn btn-outline-light btn-square mr-2">
                    <i className="fab fa-facebook-f"></i>
                  </div>
                  <div className="btn btn-outline-light btn-square mr-2">
                    <i className="fab fa-linkedin-in"></i>
                  </div>
                  <div className="btn btn-outline-light btn-square mr-2">
                    <i className="fab fa-instagram"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 mb-5">
            <h5
              className="text-primary text-uppercase mb-4"
              style={{ letterSpacing: '5px' }}
            >
              Хотите получать новости?
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              consectetur ratione, repellat unde odio quia ad aliquid quos
              quidem harum.
            </p>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  style={{ padding: 30 }}
                  placeholder="Ваш Email"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Подписаться</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5">
        <div className="row">
          <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              &copy; <a href="/">Domain Name.</a> All rights reserved.
            </p>
          </div>
          <div className="col-lg-6 text-center text-md-right">
            <ul className="nav d-inline-flex">
              <li className="nav-item nav-link text-white py-0">Политика</li>
              <li className="nav-item nav-link text-white py-0">Условия</li>
              <li className="nav-item nav-link text-white py-0">FAQs</li>
              <li className="nav-item nav-link text-white py-0">Помощь</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
