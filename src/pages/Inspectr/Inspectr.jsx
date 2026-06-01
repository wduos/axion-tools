import inspectrLogoImg from "../../assets/inspectr-logo.svg";
import iconBarcode from "../../assets/icons/barcode.svg";
import box3DImg from "../../assets/box-3d.png";
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
            <img src={box3DImg} alt="Barcode icon" />
          </div>
        </div>
        <table>
          <tr>
            <td className="bold">Current SKU</td>
            <td className="dim">undefined</td>
          </tr>
          <tr>
            <td className="bold">Number of Boxes</td>
            <td className="dim">undefined</td>
          </tr>
          <tr>
            <td className="bold">Divergent Reads</td>
            <td className="dim">undefined</td>
          </tr>
        </table>
        <small className="scan-status">Awaiting barcode scan</small>
      </section>
    </>
  );
}

export default Inspectr;
