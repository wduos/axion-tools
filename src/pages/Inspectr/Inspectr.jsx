import inspectrLogoImg from "../../assets/inspectr-logo.svg";
import iconBarcode from "../../assets/icons/barcode.svg";
import Header from "../../components/Header/Header";
import "./Inspectr.css";

function Inspectr() {
  const pageName = "Inspectr";

  return (
    <>
      <Header currentPage={pageName} />

      <section className="Inspectr">
        <img src={inspectrLogoImg} alt="Inspectr logo" />
        <small className="dim center">
          Scan an SKU from a box in the pallet to begin
        </small>
        <div className="blob-wrp">
          <div className="blob"></div>
          <div className="blob alt">
            <img src={iconBarcode} alt="Barcode icon" />
          </div>
        </div>
        <h2 className="dim SKU-text">00000000000</h2>
        <small className="scan-status">Awaiting barcode scan</small>
      </section>
    </>
  );
}

export default Inspectr;
