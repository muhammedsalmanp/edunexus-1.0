import HeroContent from "../components/HeroSections/HeroContent";
import HeroIllustration from "../components/HeroSections/HeroIllustration";
import BackgroundEffects from "../components/HeroSections/BackgroundEffects";
import HeroWorld from "../components/HeroSections/HeroWorld";
const HeroSection = () => {
    return (
        <section className="relative overflow-hidden min-h-screen">



            <div className="max-w-7xl mx-auto px-4">

                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">

                    <HeroContent />

                    <HeroWorld />

                </div>

            </div>

        </section>
    );
};

export default HeroSection;

