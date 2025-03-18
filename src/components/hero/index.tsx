import Image from "next/image";

export const Hero = () => {
    return (
        <Image src="/hero.svg" alt="hero" width="500" height="100" style={{ width: "100%", height: "auto" }} />
    );
};
