import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Company from "../components/Company";
import Classes from "../components/Classes";
import { services } from "../data/services";
import { heroSettings, classesSettings } from "../data/settings";
import * as DataClasses from "../data/classes";

function IndexPage() {
  return (
    <Layout title="Robot Set Go">
      <Hero
        title={heroSettings.title}
        subtitle={heroSettings.subtitle}
        bgImage={require("../assets/img/main.jpg")}
      />
      <Services services={services} />
      <Company />
      <Classes
        settings={classesSettings}
        title={DataClasses.title}
        description={DataClasses.description}
        classes={DataClasses.classes}
      />
    </Layout>
  );
}

export default IndexPage;
