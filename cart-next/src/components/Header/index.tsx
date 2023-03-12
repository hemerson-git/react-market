import { RefObject, useRef, useState } from "react";
import { ShoppingCart, List, X } from "phosphor-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Dialog from "@radix-ui/react-dialog";

// Components
import { useCart } from "../../hooks/cartHook";
import { Menu } from "./Menu";
import { Cart } from "../Cart";
import Link from "next/link";
import { SignIn } from "@/pages/signIn";

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/",
  },
  {
    label: "About",
    href: "/",
  },
  {
    label: "Contact",
    href: "/",
  },
];

export function Header() {
  const { handleToggleCart, products, isCartVisible } = useCart();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const headerRef = useRef() as RefObject<HTMLElement>;

  function handleToggleMenu() {
    setIsMenuVisible((prevState) => !prevState);
  }

  return (
    <header
      className="flex justify-center bg-purple-500 relative text-gray-50"
      ref={headerRef}
    >
      <div className="container px-14 flex justify-between py-6">
        <h2 className="text-bold text-xl select-none uppercase">
          <Link href="/">Logo</Link>
        </h2>

        <DropdownMenu.Root open={isMenuVisible} onOpenChange={setIsMenuVisible}>
          <DropdownMenu.Trigger
            className="flex md:hidden"
            onClick={handleToggleMenu}
          >
            {isMenuVisible ? (
              <X size={24} className="text-purple-200" />
            ) : (
              <List size={24} className="text-purple-200" />
            )}
          </DropdownMenu.Trigger>

          <Menu items={menuItems}>
            <button
              onClick={() => {
                handleToggleCart();
                handleToggleMenu();
              }}
              className="flex items-center gap-2"
            >
              <ShoppingCart size={24} />({products?.length})
            </button>
          </Menu>
        </DropdownMenu.Root>

        <div
          className={`items-center gap-6 ${
            isMenuVisible
              ? `absolute top-full left-0 w-full bg-purple-500 flex flex-col`
              : "hidden"
          } md:flex`}
        >
          <nav>
            <ul className="flex flex-col gap-2 md:flex-row">
              {menuItems.map((menuItem, index) => (
                <li key={`item-${index}`}>
                  <Link href={menuItem.href}>{menuItem.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <Dialog.Root
            open={isCartVisible}
            onOpenChange={handleToggleCart}
            modal
          >
            <Dialog.Trigger
              onClick={() => {
                handleToggleCart();
              }}
              className="flex items-center gap-2"
            >
              <ShoppingCart size={24} />({products?.length})
            </Dialog.Trigger>

            <Cart />

            <div
              role="separator"
              className="hidden md:flex w-px h-4 bg-gray-50"
            />

            <SignIn />
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
