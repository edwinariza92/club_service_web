import { redirect } from "next/navigation";

export const metadata = {
  title: "Demo",
};

export default async function Demo() {
  redirect("https://clubservice.netlify.app");
}
