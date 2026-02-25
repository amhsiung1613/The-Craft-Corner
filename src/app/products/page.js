// export const dynamic = "force-dynamic";

import Display from "../../components/display"; // temporary until you move it

export default function ProductsPage({ searchParams }) {
  return <Display initialCategory={searchParams.category} />;
}