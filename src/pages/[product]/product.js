import { BasicLayout } from "@/layouts";
import { DetailProduct, FooterApp, Redes, Separator } from "@/components";
import { Footer } from "@/components";

export default function ProductPage(props) {
  const { product, relate, gallery } = props;

  return (
    <div>
      <DetailProduct product={product} relate={relate} gallery={gallery} />
      <FooterApp />
      <Footer />
    </div>
  );
}
