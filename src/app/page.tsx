import Image from "next/image";
import bg from "../../public/images/79.jpg"
import Link from "next/link"
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function Home() {
  return (
    <section className="flex justify-center overflow-y-hidden">
      <Image className="-z-10 -mt-28" src={"/images/79.jpg"} width={bg.width} height={bg.width} alt="" sizes={""} />
      <div className="bg-transparent absolute flex flex-col top-12">
        <div className="h-26 flex flex-col md:justify-between gap-4 my-2 justify-center">
          <div className="flex justify-center">
            <Image
              src={"/logoMR_whitebg.png"}
              width={210}
              height={210}
              alt="Logo Maua Racing"
              className="ml-3"

            />
          </div>
          <div className="place-content-center">
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger className="bg-red-300"><Menu /></SheetTrigger>
                <SheetContent className="bg-gray-950 text-gray-950">
                  <SheetHeader className="">
                    <SheetTitle className="border-b text-center text-inherit">
                      <Link href={"/"}>Maua Racing</Link>
                    </SheetTitle>

                    <SheetDescription>

                    </SheetDescription>

                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            <NavigationMenu className="hidden md:inline-flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-inherit text-gray-950 hover:border-t-2 border-red-500 rounded-none hover:bg-inherit hover:text-gray-950 font-semibold text-lg">QUEM SOMOS</NavigationMenuTrigger>
                  <NavigationMenuContent className="">
                    <Link href={""} legacyBehavior passHref>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                        O que é FSAE?
                      </NavigationMenuLink>
                    </Link>
                    <Link href={""} legacyBehavior passHref>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                        Nossa equipe
                      </NavigationMenuLink>
                    </Link>
                    <Link href={""} legacyBehavior passHref>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                        Patrocinadores
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-inherit text-gray-950 hover:border-t-2 border-red-500 rounded-none hover:bg-inherit hover:text-gray-950 font-semibold text-lg">CARROS</NavigationMenuTrigger>
                  <NavigationMenuContent>

                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href={""} legacyBehavior passHref>
                    <NavigationMenuLink className={`bg-inherit text-gray-950 hover:border-t-2 border-red-500 rounded-none hover:bg-inherit hover:text-gray-950 font-semibold text-lg px-2`}>
                      GALERIA
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href={""} legacyBehavior passHref>
                    <NavigationMenuLink className={`bg-inherit text-gray-950 hover:border-t-2 border-red-500 rounded-none hover:bg-inherit hover:text-gray-950 font-semibold text-lg px-2`}>
                      MÍDIA
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-inherit text-gray-950 hover:border-t-2 border-red-500 rounded-none hover:bg-inherit hover:text-gray-950 font-semibold text-lg">PARTICIPE</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <Link href={""} legacyBehavior passHref>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                        Seja um patrocinador
                      </NavigationMenuLink>
                    </Link>
                    <Link href={""} legacyBehavior passHref>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                        Seja um membro
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-inherit text-gray-950 hover:border-t-2 border-red-500 rounded-none hover:bg-inherit hover:text-gray-950 font-semibold text-lg">CONTATOS</NavigationMenuTrigger>
                  <NavigationMenuContent></NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </section>
  );
}
