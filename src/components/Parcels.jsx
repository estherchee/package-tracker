import ParcelCard from './ParcelCard';

import '../styles/components/parcel-container.css';

export default function Parcels(props) {
  const { parcels } = props;

  const status = parcels.length > 0 && parcels[0].status;

  const icons = {
    'order-info-received': require('../assets/images/order-info-received.svg')
      .default,
    'on-the-way': require('../assets/images/on-the-way.svg').default,
    'ready-for-pickup': require('../assets/images/ready-for-pickup.svg')
      .default,
    delivered: require('../assets/images/delivered.svg').default,
  };

  const Parcels = parcels.map((parcel) => (
    <ParcelCard key={parcel.id} parcel={parcel} icon={icons[status]} />
  ));

  return <div className="parcel-container">{Parcels}</div>;
}
