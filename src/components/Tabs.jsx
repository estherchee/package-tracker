import { useTranslation } from 'react-i18next';

import '../styles/components/tabs.css';

function Tabs(props) {
  const { onTabClick, currentTabIndex } = props;

  const { t } = useTranslation();

  const tabs = [
    t('ready-for-pickup.label'),
    t('on-the-way.label'),
    t('order-info-received.label'),
    t('delivered.label'),
  ];

  const getClassName = (index) => {
    let className = 'tabs';
    if (currentTabIndex === index) {
      className += ' tabs-active';
    }
    return className;
  };

  return (
    <div className="tabs-container">
      {tabs.map((tab, index) => (
        <button
          key={`${tab}-${index}`}
          className={getClassName(index)}
          onClick={() => onTabClick(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
