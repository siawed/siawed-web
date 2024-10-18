import CustomerSection from "./sections/customer/customer";
import DedicatedSection from "./sections/dedicated/dedicated";
import DesignSection from "./sections/desing/desing";
import EmpowerSection from "./sections/empower/empower";
import FounderSection from "./sections/founder/founder";
import HeroSection from "./sections/hero/hero";
import OathSection from "./sections/oath/oath";
import PlansSection from "./sections/plans/plans";
import PowerUpSection from "./sections/power-up/power-up";
import SoldiersSection from "./sections/soldiers/soldiers";
import SupportSection from "./sections/support/support";

const HomeScreen = () => {
  return (
    <main>
      <HeroSection />
      <EmpowerSection />
      <DedicatedSection />
      <PowerUpSection />
      <CustomerSection />
      <SoldiersSection/>
      <OathSection/>
      <PlansSection/>
      <DesignSection/>
      <SupportSection/>
      <FounderSection/>
    </main>
  );
};

export default HomeScreen;
