import { useParams, Navigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import ServiceHero from '../components/service/ServiceHero';
import ServiceOverview from '../components/service/ServiceOverview';
import ServiceBenefitsBento from '../components/service/ServiceBenefitsBento';
import ServiceTimeline from '../components/service/ServiceTimeline';
import ServiceIncludedFeatures from '../components/service/ServiceIncludedFeatures';
import ServiceDocumentChecklist from '../components/service/ServiceDocumentChecklist';
import ServiceWhyChooseUs from '../components/service/ServiceWhyChooseUs';
import ServiceFAQ from '../components/service/ServiceFAQ';
import ServiceRelated from '../components/service/ServiceRelated';
import ServiceCTA from '../components/service/ServiceCTA';

export default function ServiceDetail() {
  const { slug } = useParams();
  
  // Fetch data based on slug. If not found, you could route to 404.
  const data = servicesData[slug];

  if (!data) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-black min-h-screen">
      <ServiceHero data={data} />
      <ServiceOverview data={data} />
      <ServiceBenefitsBento data={data} />
      <ServiceTimeline data={data} />
      <ServiceIncludedFeatures data={data} />
      <ServiceDocumentChecklist data={data} />
      <ServiceWhyChooseUs />
      <ServiceFAQ data={data} />
      <ServiceRelated data={data} />
      <ServiceCTA />
    </div>
  );
}
