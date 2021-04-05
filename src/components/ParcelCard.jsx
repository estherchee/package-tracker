import { useTranslation } from 'react-i18next';

import '../styles/components/parcel-card.css';

function ParcelCard(props) {
  const { parcel, icon } = props;

  const { t } = useTranslation();

  const formatStatus = (status) => {
    const statusWithoutDash = t(`${status}.label`).replaceAll('-', ' ');
    return (
      statusWithoutDash.slice(0, 1).toUpperCase() + statusWithoutDash.slice(1)
    );
  };

  const formatETA = (eta) => {
    const date = new Date(eta);
    return date.toLocaleString('sv-SE');
  };

  return (
    <div className="parcel-card">
      <div className="icon-container">
        <img src={icon} alt={parcel.status}></img>
      </div>
      <div className="parcel-info">
        <span className="status-title">{formatStatus(parcel.status)}</span>
        <span className="parcel-info-style">
          {t('parcel.label')} {parcel.parcel_id} {t('from.label')}{' '}
          {parcel.sender}
        </span>
        {parcel.status !== 'delivered' && (
          <>
            <span className="parcel-info-style">
              {t('eta.label')} : {formatETA(parcel.eta)}
            </span>
            <span className="parcel-info-style">
              {t('pickup-location.label')} : {parcel.location_name}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default ParcelCard;
