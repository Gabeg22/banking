export const dynamic = 'force-dynamic'
import SideBar from "@/components/ui/SideBar";
import Image from "next/image";
import MobileNav from "@/components/ui/MobileNav";
import { log } from "console";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect, useRouter } from "next/navigation";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) redirect('/sign-in')
  return (
   <main className="flex h-screen w-full font-inter">
    <SideBar user={loggedIn}/>

    <div className="flex size-full flex-col">
      <div className="root-layout">
        <Image src="/icons/logo.png" width={50} height={50}
          alt="menu-icon"/>
          <div>
            <MobileNav user={loggedIn} />
          </div>
      </div>
      {children}
    </div>
   </main>
  );
}
