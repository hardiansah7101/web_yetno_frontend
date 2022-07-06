import React from "react";
import MarketplaceLayout from "../../layouts/marketplace";
import './Home.css'

export default function Home() {
  return (
    <MarketplaceLayout>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="image/carousel1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="image/carousel2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="image/carousel3.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        <h4 className="text-center font-wight-bold m-4">PRODUK TERBARU</h4>
        <div className="row">
          <div className="card" style={{ width: '15rem' }}>
            <img src="image/huaweip40pro.jpg" className="card-img-top mt-2" alt="..." />
            <div className="card-body bg-light">
              <h6 className="card-title">HP HUAWEI 40 PRO SECOND</h6>
              <p className="card-text ">Rp8.400.000</p>
              <a href="#?" className="btn btn-outline-success btn-sm">Beli Sekarang</a>
            </div>
          </div>
          <div className="card" style={{ width: '15rem' }}>
            <img src="image/iphonexr.jpg" className="card-img-top mt-2" alt="..." />
            <div className="card-body bg-light">
              <h6 className="card-title">HP iPHONE XR SECOND</h6>
              <p className="card-text ">Rp6.000.000</p>
              <a href="#?" className="btn btn-outline-success btn-sm">Beli Sekarang</a>
            </div>
          </div>
          <div className="card" style={{ width: '15rem' }}>
            <img src="image/opporeno4f.jpg" className="card-img-top mt-2" alt="..." />
            <div className="card-body bg-light">
              <h6 className="card-title">HP OPPO RENO 4F SECOND</h6>
              <p className="card-text ">Rp3.370.000</p>
              <a href="#?" className="btn btn-outline-success btn-sm">Beli Sekarang</a>
            </div>
          </div>
          <div className="card" style={{ width: '15rem' }}>
            <img src="image/xiaomiredminote10.jpg" className="card-img-top mt-2" alt="..." />
            <div className="card-body bg-light">
              <h6 className="card-title">HP XIAOMI REDMI NOTE 10 SECOND</h6>
              <p className="card-text ">Rp2.300.000</p>
              <a href="#?" className="btn btn-outline-success btn-sm">Beli Sekarang</a>
            </div>
          </div>
        </div>
      </div>
    </MarketplaceLayout>
  )
}