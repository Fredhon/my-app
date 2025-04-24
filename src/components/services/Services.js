import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';

const Services = () => {
  const services = [
    { 
      title: 'Пультовая охрана', 
      description: 'Круглосуточный мониторинг объектов через центральный пульт с мгновенным реагированием на тревожные сигналы и вызовом групп быстрого реагирования',
      icon: 'fa-shield-alt'
    },
    { 
      title: 'Физическая охрана', 
      description: 'Обеспечение безопасности объектов с помощью патрулирования, контроля доступа и оперативного реагирования на инциденты',
      icon: 'fa-user-shield'
    },
    { 
      title: 'Вооруженная охрана', 
      description: 'Профессиональная защита объектов повышенного риска (банки, ювелирные магазины) с применением лицензированного оружия',
      icon: 'fa-lock'
    },
    { 
      title: 'Сопровождение грузов', 
      description: 'Безопасная транспортировка ценных и опасных грузов с полным охранным сопровождением на всех этапах перевозки',
      icon: 'fa-truck'
    },
    { 
      title: 'Монтаж систем безопасности', 
      description: 'Проектирование, установка и настройка комплексных систем видеонаблюдения, сигнализации и контроля доступа',
      icon: 'fa-camera'
    },
    { 
      title: 'Анализ безопасности', 
      description: 'Экспертная оценка уязвимостей объекта с разработкой индивидуальных решений по обеспечению защиты',
      icon: 'fa-search'
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">Наши услуги</h2>
          <p className="section-subtitle">Комплексные решения для вашей безопасности</p>
          <div className="divider"></div>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;