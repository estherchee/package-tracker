import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import Tabs from '../components/Tabs';
import Loader from '../components/Loader';
import Parcels from '../components/Parcels';

import '../styles/views/home.css';

function Home() {
  const { t } = useTranslation();

  const [isLoadingParcels, setIsLoadingParcels] = useState(false);
  const [parcels, setParcels] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    setIsLoadingParcels(true);
    fetch('https://my.api.mockaroo.com/orders.json?key=e49e6840')
      .then((response) => response.json())
      .then((json) => setParcels(json))
      .then(() => setIsLoadingParcels(false));
  }, [setParcels]);

  const userName = parcels.length > 0 && parcels[0].user_name;

  const filteredParcels = useMemo(() => {
    switch (tabIndex) {
      case 1:
        return parcels.filter((parcel) => parcel.status === 'on-the-way');
      case 2:
        return parcels.filter(
          (parcel) => parcel.status === 'order-info-received'
        );
      case 3:
        return parcels.filter((parcel) => parcel.status === 'delivered');
      default:
        return parcels.filter((parcel) => parcel.status === 'ready-for-pickup');
    }
  }, [tabIndex, parcels]);

  return (
    <div className="container">
      <h1 className="greeting">
        {t('hello.label')} {userName}, {t('greeting.label')}:
      </h1>
      <Tabs onTabClick={setTabIndex} currentTabIndex={tabIndex} />
      {isLoadingParcels ? <Loader /> : <Parcels parcels={filteredParcels} />}
    </div>
  );
}

export default Home;
