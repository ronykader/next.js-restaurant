import Image from "next/image";

const CartIcon = () => {
    return (
        <div className="flex items-center gap-4">
            <div className="relative w-8 h-8">
                <Image src="/cart.png" alt="cart" fill/>
            </div>
            Cart (3)
        </div>
    );
};

export default CartIcon;
