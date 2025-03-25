// import { redirect } from "next/navigation";
// export default function Home() {
//   redirect('/order/13')
// }

import { redirect } from "next/navigation";

export default function Home() {
  const condicion = true;

  if (condicion) {
    redirect('/order/13');
  } else {
    redirect('/emergencia/13'); 
  }

  return null;
}

